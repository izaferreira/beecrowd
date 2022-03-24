var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const inteiro1 = lines[0].split(" ");
const inteiro2 = lines[1].split(" ");
const total = lines[0] * lines[1];
console.log("PROD = " + total);
