// Manipulando Prototypes

// Todas funções construtoras possuem um protótipo no Javascript

const objA = {
    chave:'a'
}
const objB = {
    chave:'b'
}
const objC = {
    chave:'c'
}

Object.setPrototypeOf(objC, objB);
Object.setPrototypeOf(objB, objA);
 
console.log(objC)

// ===================================

function Produto(nome, valor) {
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.desconto = function(per) {
    this.valor = this.valor - (this.valor * (per / 100));
}
    

const produto1 = new Produto("Arroz", 2.40);

produto1.desconto(50)
console.log(produto1.valor);