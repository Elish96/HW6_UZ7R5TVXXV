const fs = require("fs");
const { promisify } = require("util");

// Converting callback to promise
const readFile = promisify(fs.readFile);

// Template
async function plate(path = "", data = {}) {
  let content = await readFile(path);

  console.log(content.toString());
  return content;
}

module.exports = plate;
