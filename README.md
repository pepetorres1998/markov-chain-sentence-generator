# markov-chain-sentence-generator
Markov Chain Sentence Generator with shitposting capabilities.


# Run it
Install the requirements to run the program, then run it.

## Requirements
* Node v14.5.0
* Yarn v1.22.4

## Use it!
Run the main.mjs file.

```bash
git clone git@github.com:pepetorres1998/markov-chain-sentence-generator.git
cd markov-chain-sentence-generator
node main.mjs
```
You can change the contents of `text.txt`. So it will
- Change the contents of `text.txt` to get different data to form sentence. (The more text, the better!)
- Change the main.mjs to use another file as data.
- Change main.mjs to print different kind of essays/paragraphs/sentences.

# Documentation
Markov

```js
import Markov from "./markov.mjs"

// it could use any text from any source
// var markov = new Markov("Hi how are you? bla bla bla bla bla bla\n bla bla bla bla bla bla");
var markov = new Markov(fileContent.toString());

// makeSentence:
// Makes a sentence with default random value from 8 to 16 words
markov.makeSentence();

// You could also set a custom value of words.
markov.makeSentence(5);

// makeParagraph
// Makes a paragraph with default value of 1 to 4 lines. Each line is a sentence with default value of words from 8 to 16.
markov.makeParagraph();

// You could also set a custom value of lines
markov.makeParagraph(6);

// makeEssay
// Makes an Essay with default value of 1 to 4 paragraphs. Each paragraph has a default value of 4 lines.
markov.makeEssay();

// You could also set a custom value of paragraphs
markov.makeEssay(6);
```

The above applies to ShitpostMarkov class.
```js
import ShitpostMarkov from "./shitpost_markov.mjs"

var shitpostMarkov = new ShitpostMarkov(text.toString());

// With default values
shitpostMarkov.makeSentence();
shitpostMarkov.makeParagraph();
shitpostMarkov.makeEssay();

// With custom values
shitpostMarkov.makeSentence(10);
shitpostMarkov.makeParagraph(6);
shitpostMarkov.makeEssay(8);
```
