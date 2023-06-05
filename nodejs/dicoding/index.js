const message = (name) => {
  console.log(`Hello ${name}`);
};

message("JavaScript");

const cpuInformation = process.memoryUsage();

console.log("Untuk mengetahui informasi laptop / komputer: ");
console.log(cpuInformation);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log("process.argv seperti uri segement codeIgniter");
console.log(`Hello ${firstName} ${lastName}`);

console.log("CHALANGE DICODING 1");
console.log("===================");

const initialMemoryUsage = cpuInformation.heapUsed; // TODO 1
const yourName = process.argv[2];
const environment = process.env.NODE_ENV; // TODO 3

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed; // TODO 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);

console.log("===================");
console.log("END OF CHALANGE DICODING 1");
