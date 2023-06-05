const fs = require("fs");
const path = require("path");

filePath = path.resolve("fs-stream", "file.txt");
console.log("Tempat penyimpanan file: ", filePath);

const readableStream = fs.createReadStream(filePath, {
  highWaterMark: 10, //artinya berkas akan dibaca setiap 10 karakter (1 karakter = 1 bytes)
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
