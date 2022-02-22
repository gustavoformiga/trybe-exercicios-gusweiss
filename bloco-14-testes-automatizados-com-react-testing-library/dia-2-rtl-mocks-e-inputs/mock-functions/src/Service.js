export const randomNumberInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function upperCase(phrase) {
  return phrase.toUpperCase();
}

function firstLetter(phrase) {
  return phrase[0];
}

function boundingStrings(phrase1, phrase2) {
  return (`${phrase1} ${phrase2}`)
}

async function gettingFetchedDog() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

module.exports = { randomNumberInt, upperCase, firstLetter, boundingStrings, gettingFetchedDog };

