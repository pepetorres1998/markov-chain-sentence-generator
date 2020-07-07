import fs from "fs";
import Markov from "./markov.mjs";
import ShitpostMarkov from "./shitpost_markov.mjs";

const file = fs.readFileSync("text.txt", "utf8");

var markov = new Markov(file.toString());
var shitpostMarkov = new ShitpostMarkov(file.toString());

console.log(markov.makeEssay(4));
console.log();
console.log();
console.log(shitpostMarkov.makeEssay(4));
console.log();
