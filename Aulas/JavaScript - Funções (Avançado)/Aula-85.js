// Function MAP
// Descrição: semelhante ao filter, mas retorna um array com o mesmo tamanho do array original

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numberDobrado = number.map(valor => valor*2);

console.log(numberDobrado);

const RickAndMorty = [
    {name: 'Rick', age: 70},
    {name: 'Morty', age: 14},
    {name: 'Jerry', age: 40},
    {name: 'Summer', age: 17},
    {name: 'Beth', age: 34}
];

const stringNames = RickAndMorty.map(obj => obj.name);

const removeNames = RickAndMorty.map(function(obj){
    delete obj.name;
    return obj;
});

const addId = RickAndMorty.map((obj,indice) => {
    const novoObj = {...obj}
    novoObj.id = indice;
    return novoObj;
})

console.log(stringNames);
console.log(removeNames);
console.log(addId);