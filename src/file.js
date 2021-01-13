const fs = require("fs");

class File {
  static get(path) {
    try {
      return fs.readFileSync(path);
    } catch (error) {
      console.error(`Couldn't read file from path: ${path}`);
    }
  }

  static save(path, content) {
    try {
      fs.writeFileSync(path, content);
    } catch (error) {
      console.error(
        `Couldn't save the file to this path. Do you have the correct permissions?`
      );
    }
  }

  static getAsJSON(path) {
    try {
      return JSON.parse(this.get(path));
    } catch (error) {
      console.error(`Couldn't parse the content of the file`);
    }
  }
}

module.exports = { File };
