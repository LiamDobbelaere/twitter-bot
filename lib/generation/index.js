const fs = require("fs");
const path = require("path");
const pluralize = require("pluralize");

const verbs = readAllLines("verbs");
const nouns = readAllLines("nouns");
const emoji = readAllLines("emoji");

function readAllLines(filename) {
  return fs
    .readFileSync(path.join(__dirname, `./data/${filename}.txt`))
    .toString()
    .split("\n")
    .map((item) => item.trim());
}

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  const randomVerb = randomFromArray(verbs);
  const randomNoun = pluralize(randomFromArray(nouns));
  const randomEmoji = randomFromArray(emoji);

  return `Me when I ${randomVerb} ${randomNoun}: ${randomEmoji}`;
}

module.exports = {
  generate,
};
