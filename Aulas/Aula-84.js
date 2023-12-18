// Filter

// método tradicional 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function callbackFilter(valor) {
    return valor < 5;
}

const numberFiltrados = number.filter(callbackFilter);

console.log(numberFiltrados);

// método mais utilizado

const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numberFiltrados2 = number.filter(valor => valor > 5);

console.log(numberFiltrados2);

// utilizando todos os parâmetros do filter (valor, indice, array)

const number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numberFiltrados3 = number.filter((valor, indice, array) => valor > 5 && indice > 5 && array.length > 6);

console.log(numberFiltrados3);

// Filter sempre retorna um array com a mesma quantidade de elementos ou menos

// Filter com objetos e elementos

const RickAndMorty = [
    {name: 'Rick', age: 70},
    {name: 'Morty', age: 14},
    {name: 'Jerry', age: 40},
    {name: 'Summer', age: 17},
    {name: 'Beth', age: 34}
];

const menoresDeIdade = RickAndMorty.filter(valor => valor.age < 18);

const nomesComMenosDeCincoLetras = RickAndMorty.filter(obj => obj.name.length < 5);

const pessoasQueONomeTerminacomY = RickAndMorty.filter(obj => obj.name.toLowerCase().endsWith('y'));

console.log(menoresDeIdade);
console.log(nomesComMenosDeCincoLetras);
console.log(pessoasQueONomeTerminacomY);
