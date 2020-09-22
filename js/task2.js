// ЗАДАЧА 2
const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(' ').length; // Write code in this line

const message = 'Proin sociis natoque et magnis parturient montes mus';
const arrow = message.split(' ');
console.log(arrow.length);

const amount = message.split(' ').length;
console.log(amount);
message.split(' ').length;
// console.log(array);
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100