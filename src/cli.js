const meow = require("meow");

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

module.exports = { cli };
