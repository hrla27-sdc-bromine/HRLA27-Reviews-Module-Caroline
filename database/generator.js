const loremIpsum = require('lorem-ipsum');

let descriptionGenerator = () => {
  return loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 10,
    sentenceUpperBound: 20,
    paragraphLowerBound: 15,
    paragraphUpperBound: 20
  });
};

let headerGenerator = () => {
  return loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    paragraphLowerBound: 5,
    paragraphUpperBound: 10
  });
};

let idGenerator = number => {
  return Math.floor(Math.random() * Math.floor(number) + 1);
};

let fiveStarGenerator = () => {
  return Math.floor(Math.random() * Math.floor(5) + 1);
};

let year = (min, max) => Math.floor(Math.random() * (max - min) + min);
let day = () => Math.floor(Math.random() * 31 + 1);
let month = () => Math.floor(Math.random() * 12 + 1);

let dateGenerator = () => {
  return new Date(year(2010, 2020), month(), day());
};

let recommendGen = () => {
  return Math.random() >= 0.5;
};

let helpfulCountGen = () => {
  return Math.floor(Math.random() * Math.floor(100) + 1);
};

module.exports = {
  descriptionGenerator,
  headerGenerator,
  idGenerator,
  fiveStarGenerator,
  dateGenerator,
  recommendGen,
  helpfulCountGen
};
