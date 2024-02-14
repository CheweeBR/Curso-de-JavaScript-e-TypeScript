// Métodos úteis para objetos

const product = {price: 2};
const outracoisa = {...product, material: "Porcelana"}; // maneira de copiar objetos em outras variáveis.
const chave = Object.assign({}, outracoisa, {cor: "Azul"}); // Outra maneira de copiar objetos em outras variáveis.

outracoisa.price = 1;

console.log(product);
console.log(outracoisa);
console.log(chave);

//===========================================================

Object.freeze(product) // não da para alterar o objeto
product.price = 1;
console.log(product);

Object.defineProperty(chave, 'cor', {
    writable: false,
    configurable: false

});

console.log(Object.getOwnPropertyDescriptor(chave, 'cor'))