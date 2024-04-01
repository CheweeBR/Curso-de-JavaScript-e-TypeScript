// O javascript é baseado em protótipos

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.digaOi = 'Olá!'

let pessoa01 = new Pessoa("Arthur", "Possidonio");

console.log(pessoa01.digaOi);

