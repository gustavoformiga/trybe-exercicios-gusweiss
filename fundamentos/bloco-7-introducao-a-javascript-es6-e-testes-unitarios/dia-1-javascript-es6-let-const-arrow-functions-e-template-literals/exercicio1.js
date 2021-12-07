// 2-Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (phrase) => {
  let newLongestWord = phrase.split(' ');
  let maxSize = 0;
  for (let word of newLongestWord) {
    if (word.length > maxSize) {
    maxSize = word.length;
    result = word;
    }
  } return result
}
