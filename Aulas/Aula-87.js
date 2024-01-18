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

const numerosPares2 = number.filter((valor) => {
    return valor % 2 == 0;
})

console.log(numerosPares);
console.log(numerosPares2);