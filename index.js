#!/usr/bin/env node
const fs = require("fs");
const meow = require("meow");
const fetch = require("node-fetch");

const cli = meow(
  `
    Usage
      $ swagger-types-generator <swagger_file_path>
 
    Options
      --path, -p    path to save the generated types.
      --name, -n    name of the container file that'll be saved.
`,
  {
    flags: {
      path: {
        type: "string",
        alias: "p",
      },
      name: {
        type: "string",
        alias: "n",
      },
    },
  }
);

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

  if (property.$ref) {
    return parseRef(property.$ref);
  }

  switch (type) {
    case "integer":
      return "number";
    default:
      return "string";
  }
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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
    await fs.writeFileSync(
      `${cli.flags.path || "."}/${cli.flags.name || "types"}.ts`,
      file
    );

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
  if (!swaggerFile.definitions) {
    throw new Error("No `definitions` key is in the JSON.");
  }

  const models = Object.keys(swaggerFile.definitions).map((modelName) =>
    parseModel(modelName, swaggerFile.definitions[modelName])
  );
  const imports = addImports(models);
  const file = createFile(models, imports);

  await saveFile(file);
}

async function getFile() {
  if (cli.input[0].indexOf("https") > -1 || cli.input[0].indexOf("http") > -1) {
    return fetch(cli.input[0]).then((res) => res.json());
  }

  const file = fs.readFileSync(cli.input[0]);
  return JSON.parse(file);
}

async function main() {
  if (cli.input.length === 0 || !cli.input[0]) {
    throw new Error("Swagger file hasn't been specified.");
  }

  try {
    await generateFile(await getFile());
  } catch (error) {
    console.error(
      "Error trying to parse the specified file. Try to give a correct JSON file.",
      error
    );
  }
}

main();
