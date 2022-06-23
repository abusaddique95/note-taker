const fs = require("fs");
const path = require("path");

const readDataFromFile = (fileName) => {
  const filePath = path.join(__dirname, `../data/db.json`);

  const rawData = fs.readFileSync(filePath, "utf8");
  console.log(rawData);
  return JSON.parse(rawData);
};

const writeDataToFile = (fileName, data) => {
  const filePath = path.join(__dirname, `../data/db.json`);
  const path = require("path");

  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = {
  readDataFromFile,
  writeDataToFile,
};
