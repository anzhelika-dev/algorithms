// Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
// invertCase('Hello, World!') // hELLO, wORLD!
// invertCase('I loVe JS') // i LOvE js
const invertCase = (name) => {
  let newWord = '';
  for (let i = 0; i < name.length; i+=1) {
    if (name[i] === name[i].toUpperCase()) {
      newWord += name[i].toLowerCase();
    }
    else if (name[i] === name[i].toLowerCase()) {
      newWord += name[i].toUpperCase();
    }
    else {newWord += name[i];}
  }
  return newWord;
}
