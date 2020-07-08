import fs from "fs";
import Markov from "../markov.mjs";

describe("Markov", () => {
  const file = fs.readFileSync("text.txt", "utf8");
  const markov = new Markov(file.toString());

  describe("makeSentence", () => {
    it("generates sentence with custom number of words", () => {
      expect(markov.makeSentence(5).split(" ").length).toBe(5);
    });
  });
});
