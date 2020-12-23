#!/usr/bin/env node
const swagger = require("./swagger.json");
const fs = require("fs");

const modules = [
  { module: "Decimal", source: "decimal.js" },
  { module: "LocalDate", source: "js-joda" },
];

function parseModel(model, properties) {
  return `type ${parseModelTitle(model)} = {
    ${parseProperties(properties)}
}\n\n`;
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

  return attributes.join("    ");
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

  switch (type) {
    case "integer":
      return "number";
    default:
      return "string";
  }
}

function parseEnum(options) {
  return options
    .map((e, i) => (i < options.length - 1 ? [`'${e}'`, " | "] : [`'${e}'`]))
    .reduce((a, b) => a.concat(b))
    .join("");
}

function parseModelTitle(title) {
  return title
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");
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
    await fs.writeFileSync("types.ts", file);

    console.log("File saved successfully.");
  } catch (error) {
    console.error("Error trying to save the file.");
  }
}

function createFile(definitions, imports) {
  return `${imports}
${definitions.join("")}`;
}

async function main() {
  const definitions = Object.keys(swagger.definitions).map((definition) =>
    parseModel(definition, swagger.definitions[definition])
  );
  const imports = addImports(definitions);
  const file = createFile(definitions, imports);

  await saveFile(file);
}

main();
