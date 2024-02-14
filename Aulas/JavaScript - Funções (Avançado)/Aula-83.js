// Concatenar Arrays

// Função concat:

const num1 = [1,2,3];
const num2 = [4,5,6];
const concat =  num1.concat(num2);
console.log(concat);

// Operador rest (...) ou spread (...):

const spread = [...num1, 'Tiago' , ...num2, ...[7,8,9]];
console.log(spread);
