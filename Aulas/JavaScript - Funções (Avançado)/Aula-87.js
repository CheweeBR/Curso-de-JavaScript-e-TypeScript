// Unir Filter + Map + Reduce

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosPares = number.filter((valor) => { 
    return valor % 2 == 0; 
}).map(function(valor) {
    return valor * 2;
}).reduce((acumulador, valor) => {
    return acumulador += valor;
});

// or

const numerosParesSimple = number.filter((valor => valor % 2 == 0)).map((valor => valor * 2)).reduce((acumulador, valor) => acumulador+=valor);

console.log(numerosPares);
console.log(numerosParesSimple);