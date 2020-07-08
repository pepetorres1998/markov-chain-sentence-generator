import fs from "fs";
import Markov from "../markov.mjs";

describe("Markov", () => {
  const file = fs.readFileSync("text.txt", "utf8");
  const markov = new Markov(file.toString());

  describe("makeSentence", () => {
    it("generates a sentence", () => {
      expect(markov.makeSentence()).not.toBe(null)
    });

    it("generates sentence with custom number of words", () => {
      expect(markov.makeSentence(5).split(" ").length).toBe(5);
    });

    it("generates sentence with random number of words", () => {
      let sentence = markov.makeSentence();

      expect(sentence.split(" ").length).toBeGreaterThanOrEqual(8);
      expect(sentence.split(" ").length).toBeLessThanOrEqual(16);
    });
  });

  describe("makeParagraph", () => {
    it("generates a paragraph", () => {
      expect(markov.makeParagraph()).not.toBe(null);
    });

    it("generates paragraph with custom number of sentences", () => {
      expect(markov.makeParagraph(6).split("\n").length).toBe(6);
    });

    it("generates paragraph with random number of sentences", () => {
      let paragraph = markov.makeParagraph();

      expect(paragraph.split("\n").length).toBeGreaterThanOrEqual(1);
      expect(paragraph.split("\n").length).toBeLessThanOrEqual(4);
    });
  });

  describe("makeEssay", () => {
    it("generates an essay", () => {
      expect(markov.makeEssay()).not.toBe(null);
    });

    it("generates essay with custom number of paragraphs", () => {
      expect(markov.makeEssay(2).split("\n\n").length).toBe(2);
    });

    it("generates essay with random number of paragraphs", () => {
      let essay = markov.makeEssay();

      expect(essay.split("\n\n").length).toBeGreaterThanOrEqual(1);
      expect(essay.split("\n\n").length).toBeLessThanOrEqual(4);
    });

    it("generates essay with paragraphs of 4 sentences", () => {
      let essay = markov.makeEssay();
      let paragraphs = essay.split("\n\n");
      let sentences = paragraphs.forEach(paragraph => {
        expect(paragraph.split("\n").length).toBe(4);
      });
    });
  });
});
