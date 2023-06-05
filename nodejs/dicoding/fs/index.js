const fs = require("fs");
const path = require("path");

filePath = path.resolve("fs", "file.txt");
console.log("Tempat penyimpanan file: ", filePath);

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile(filePath, "UTF-8", fileReadCallback);
