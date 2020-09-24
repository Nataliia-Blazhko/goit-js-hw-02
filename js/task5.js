// ЗАДАЧА 5
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
function checkForSpam (str) { 
  'use strict';
  // Write code under this line
  
  // const str = '[SPAM] How to earn fast money?';
                                
  const result = str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');
  return result;

  // if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
  //   return true;
  // } {
  //   return false;
  // }

  // console.log(message.includes('spam'));
  // console.log(message.includes('sale'));
}
// checkForSpam('Latest technology news');

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true