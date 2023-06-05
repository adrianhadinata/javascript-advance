const fs = require("fs");
const path = require("path");

filePath = path.resolve("fs-write", "output.txt");
console.log("Tempat penyimpanan file: ", filePath);

const writableStream = fs.createWriteStream(filePath);

writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.end("Akhir dari writable stream!");

// CHALANGGE DICODING
/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

filePathInput = path.resolve("fs-write", "input.txt");
filePathOutput = path.resolve("fs-write", "output.txt");

const readableStream = fs.createReadStream(filePathInput, {
  highWaterMark: 15, //artinya berkas akan dibaca setiap 15 karakter (1 karakter = 1 bytes)
});

const writableStreamOutput = fs.createWriteStream(filePathOutput);

readableStream.on("readable", () => {
  try {
    writableStreamOutput.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
    console.log("file unreadable");
  }
});

readableStream.on("end", () => {
  console.log("Done");
  writableStreamOutput.end();
});
