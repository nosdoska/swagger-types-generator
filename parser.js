const swagger = require("./swagger.json");
const fs = require("fs");

function parseModel(model, properties) {
  return `type ${parseModelTitle(model)} = {
    ${parseProperties(properties)}
}\n\n`;
}

function parseProperties({ properties }) {
  return Object.keys(properties)
    .map((property) => {
      return `${property}: ${parseType(properties[property])};\n`;
    })
    .join("    ");
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
    .join("")
    .replace(/ /g, "");
}

async function saveFile(file) {
  try {
    await fs.writeFileSync("types.ts", file);

    console.log("File saved.");
  } catch (error) {
    console.error("Error trying to save the file.");
  }
}

async function main() {
  let imports = "";
  let items = Object.keys(swagger.definitions).map((definition) =>
    parseModel(definition, swagger.definitions[definition])
  );

  if (items.some((item) => item.indexOf("Decimal") > -1)) {
    imports += `import { Decimal } from 'decimal.js';\n`;
  }

  if (items.some((item) => item.indexOf("LocalDate")) > -1) {
    imports += `import { LocalDate } from 'js-joda';\n`;
  }

  items = `${imports}
${items.join("")}`;

  await saveFile(items);
}

main();
