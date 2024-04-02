// Lv.1

function solution(n, words) {
  let passedWords = [];

  for (let i = 0; i < words.length; i++) {
    const beforeWord = words[i - 1];

    if (beforeWord) {
      if (words[i][0] !== beforeWord[beforeWord.length - 1]) {
        return [(i % n) + 1, Math.floor(i / n) + 1];
      }
    }

    if (passedWords.includes(words[i])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    passedWords.push(words[i]);
  }

  return [0, 0];
}
