// Reduce

//Reduce é uma forma de filtrar um array e reduzi-lo a 1 elemento.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const somaTotal = number.reduce((acumulador, valor) => acumulador += valor);
console.log(somaTotal);

const somaTotalObjetos = number.reduce((acumulador, valor, indice) => indice + 1);
console.log(somaTotalObjetos);

const TotalPares = number.reduce((acumulador, valor) => {
    if(valor % 2 == 0){
        acumulador++;
    } 
    return acumulador;
});
console.log(TotalPares);

const RickAndMorty = [
    {name: 'Rick', age: 70},
    {name: 'Morty', age: 14},
    {name: 'Jerry', age: 40},
    {name: 'Summer', age: 17},
    {name: 'Beth', age: 34}
];

const maisNovo = RickAndMorty.reduce((acumulador, valor) => {
    if(acumulador.age < valor.age) {
        return acumulador;
    } 
    return valor;
})

console.log(maisNovo);