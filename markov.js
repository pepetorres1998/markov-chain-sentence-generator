var fs = require('fs');

class Markov {
  constructor(filename) {
    this.file = fs.readFileSync(filename, 'utf8').toString().split("\n");
    this.allWords = this.file.flatMap((row) => {
      if (row !== ''){
        return row.split(' ');
      }
    }).filter((element) => element != null);
    this.enderWords = []
    this._findEnders();
    this.currentWord = '';
  }

  makeSentence(num = this._randomIntFromInterval(8, 16)) {
    let sentence = []

    while (num > sentence.length - 1) {
      // sentence.push(_getNextWords());
      sentence = this._getNextWords(sentence);
    }

    let difference = (sentence.length - num);

    for (let i = 0; i <= difference; i++) sentence.pop();

    sentence[0] = this._capitalizeWord(sentence[0]);

    let enderIndex = this._randomIntFromInterval(0, this.enderWords.length - 1);
    sentence.push(this.enderWords[enderIndex]);

    return sentence.join(' ');
  }

  makeParagraph(num = this._randomIntFromInterval(1, 4)) {
    let paragraph = [];
    for (let index = 0; index < num; index++) {
      paragraph.push(this.makeSentence());
    }

    return paragraph.join('\n')
  }

  _getNextWords(sentence) {
    let index;
    if (this.currentWord !== '') {
      let indexes = [];
      for (let i = 0; i < this.allWords.length; i++) {
        if (this.allWords[i] === this.currentWord)
          indexes.push(i);
      }

      index = indexes[Math.floor(Math.random() * indexes.length)];
    } else {
      index = this._randomIntFromInterval(1, this.allWords.length - 1);
    }

    let wordsToBePushed = this._randomIntFromInterval(1, 3);

    if (index < this.allWords.length - wordsToBePushed) {
      for (let loopIndex = 0; loopIndex < wordsToBePushed; loopIndex++) {
        sentence.push(this.allWords[index + loopIndex].toLowerCase());
      }

      this.currentWord = this.allWords[index + wordsToBePushed];
    } else {
      sentence.push(this.allWords[index].toLowerCase());
      this.currentWord = '';
    }

    return sentence;
  }

  _findEnders() {
    this.allWords.forEach((word, index) => {
      if (word.endsWith('.')) {
        this.enderWords.push(word);
        // let index = this.allWords.findIndex(indexWord => indexWord === word);
        this.allWords.splice(index, 1);
      }
    });
  }

  _randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  _capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

markov = new Markov('./text.txt');
console.log(markov.file);
console.log(markov.allWords);
console.log(markov.enderWords);
console.log(markov.makeSentence(10));
console.log();

console.log(markov.makeParagraph(4));

