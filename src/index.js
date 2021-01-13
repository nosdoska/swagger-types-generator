#!/usr/bin/env node
const fs = require("fs");
const fetch = require("node-fetch");
const _ = require("lodash");
const { cli } = require("./cli");
const { File } = require("./file");
const { capitalize } = require("./utils");
const { execSync } = require("child_process");

const modules = [
  { module: "Decimal", source: "decimal.js" },
  { module: "LocalDate", source: "js-joda" },
];

function parseModel(model, properties) {
  return `export interface ${parseModelTitle(model)} {${parseProperties(
    properties
  )}}\n\n`;
}

function parseProperties({ required, properties }) {
  const propertiesKeys = Object.keys(properties);
  const attributes = propertiesKeys.map((property) => {
    const value = properties[property];

    return `${property}${isRequired(property, required)}: ${parseType(
      value
    )}${isNullable(value)};${
      propertiesKeys[propertiesKeys.length - 1] === property ? "" : "\n"
    }`;
  });

  return attributes.join("");
}

function isRequired(property, required) {
  return required && required.includes(property) ? "" : "?";
}

function isNullable(property) {
  if (!property["x-nullable"]) {
    return "";
  }

  return " | null";
}

function parseType(property) {
  const type = property.type;

  if (property.enum) {
    return parseEnum(property.enum);
  }

  if (property.format === "decimal") {
    return "Decimal";
  }

  if (property.format === "date") {
    return "LocalDate";
  }

  if (property.$ref) {
    return parseRef(property.$ref);
  }

  if (type === "integer") {
    return "number";
  }

  if (type === "array") {
    if (property.items.$ref) {
      return `${parseRef(property.items.$ref)}[]`;
    }

    if (property.items.type === "integer") {
      return "number[]";
    }

    return parseObjectArray(property);
  }

  return "string";
}

function parseObjectArray(property) {
  return `{
    ${parseProperties(property.items)}
}[]`;
}

function parseRef(ref) {
  const splitted = ref.split("/");

  return parseModelTitle(splitted[splitted.length - 1]);
}

function parseEnum(options) {
  return options
    .map((e, i) => (i < options.length - 1 ? [`'${e}'`, " | "] : [`'${e}'`]))
    .reduce((a, b) => a.concat(b))
    .join("");
}

function parseModelTitle(title) {
  return title.split(" ").map(capitalize).join("");
}

function addImports(definitions) {
  let imports = "";

  modules.forEach(({ module, source }) => {
    if (definitions.some((definition) => definition.indexOf(module)) > -1) {
      imports += importModuleFrom(module, source);
    }
  });

  return imports;
}

function importModuleFrom(what, source) {
  return `import { ${what} } from '${source}';\n`;
}

async function saveFile(file) {
  try {
    const path = `${cli.flags.path || "."}/${cli.flags.name || "types"}.ts`;
    File.save(path, file);

    await execSync(`prettier -w ${path}`);

    console.log("File saved successfully.");
  } catch (error) {
    console.error("Error trying to save the file.");
  }
}

function createFile(definitions, imports) {
  return `${imports}
${definitions.join("")}`;
}

async function generateFile(swaggerFile) {
  const key = swaggerFile.components ? "components.schemas" : "definitions";
  const schemas = _.get(swaggerFile, key);

  if (!schemas) {
    throw new Error(`No '${key}' key is in the JSON.`);
  }

  const models = Object.keys(schemas).map((modelName) =>
    parseModel(modelName, schemas[modelName])
  );
  const imports = addImports(models);
  const file = createFile(models, imports);

  await saveFile(file);
}

async function getFile() {
  const source = cli.input[0];

  if (source.indexOf("https") > -1 || source.indexOf("http") > -1) {
    return fetch(source).then((res) => res.json());
  }

  return File.getAsJSON(source);
}

async function main() {
  if (cli.input.length === 0 || !cli.input[0]) {
    throw new Error("Swagger file hasn't been specified.");
  }

  try {
    await generateFile(await getFile());
  } catch (error) {
    console.error(
      "Error trying to parse the specified file. Try to give a correct JSON file.\n",
      error
    );
  }
}

main();
