// ЗАДАЧА 3
function findLongestWord (string = "") {
  // Write code under this line
  const array = string.split (' ');
  // перебрать массив
  // сравнить слово с предидущим
  // задать переменную
  let longword = ''; 
  for (const word of array) {
    if (word.length > longword.length) {
      longword = word; 
    }
}
  return longword;  
  }
  
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'