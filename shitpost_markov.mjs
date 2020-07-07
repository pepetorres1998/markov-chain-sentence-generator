import Markov from "./markov.mjs";

export default class ShitpostMarkov extends Markov {
  constructor(text) {
    super(text);
  }

  makeSentence(num = this._randomIntFromInterval(8, 16)) {
    return this._shitpost(super.makeSentence());
  }

  _getNextWords(sentence) {
    let index;
    if (this.currentWord !== "") {
      let indexes = [];
      for (let i = 0; i < this.allWords.length; i++) {
        if (this.allWords[i] === this.currentWord) indexes.push(i);
      }

      index = indexes[Math.floor(Math.random() * indexes.length)];
    } else {
      index = this._randomIntFromInterval(1, this.allWords.length - 1);
    }

    let wordsToBePushed = this._randomIntFromInterval(1, 3);

    if (index < this.allWords.length - wordsToBePushed) {
      for (let loopIndex = 0; loopIndex < wordsToBePushed; loopIndex++) {
        sentence.push(this.allWords[index - loopIndex].toLowerCase());
      }

      this.currentWord = this.allWords[index - wordsToBePushed];
    } else {
      sentence.push(this.allWords[index].toLowerCase());
      this.currentWord = "";
    }

    return sentence;
  }

  _shitpost(sentence) {
    let wordArray = sentence.split(" ");

    return wordArray
      .flatMap((word) => {
        return this._shitpostWord(word);
      })
      .join(" ");
  }

  _shitpostWord(word) {
    return word
      .toUpperCase()
      .split("")
      .flatMap((char, index) => {
        if (index & (1 === 1)) {
          return char.toLowerCase();
        } else {
          return char;
        }
      })
      .join("");
  }
}
