// Heranças

function Product(nome, valor) {
  this.nome = nome;
  this.valor = valor;
}

Product.prototype.altvalor = function (newValor) {
  this.valor = newValor;
};

function Camiseta(nome, valor, cor) {
  Product.call(this, nome, valor);
  this.cor = cor;
}

function Caneca(nome, valor, cor, material) {
  Product.call(this, nome, valor);
  this.cor = cor;
  this.material = material;
}

Camiseta.prototype = Object.create(Product.prototype);
Camiseta.prototype.constructor = Camiseta;
Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Camiseta;

const camiseta = new Camiseta("Manga longa", 12, "Azul");
const caneca = new Caneca("caneca de café", 15, "preta", "Aluminío");
camiseta.altvalor(23);
caneca.altvalor(35);
console.log(camiseta);
console.log(caneca);
