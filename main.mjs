import fs from 'fs';
import Markov from './markov.mjs';

const file = fs.readFileSync('text.txt', 'utf8');

var markov = new Markov(file.toString());

console.log(markov.makeSentence(12));


