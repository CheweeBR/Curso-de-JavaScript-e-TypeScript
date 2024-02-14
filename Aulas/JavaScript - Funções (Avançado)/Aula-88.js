// ForEach

// Forma diferente de ler um Array

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let total = number.reduce((ac, valor) => ac+=valor);

number.forEach((valor) => console.log(valor));

console.log(`soma total = ${total}`);