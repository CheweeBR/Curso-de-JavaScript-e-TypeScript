const falar = {
  falar() {
    console.log(`${this.nome} ${this.sobrenome}: Estou falando`);
  },
};
const comer = {
  comer() {
    console.log("Estou comento");
  },
};

const pessoaPrototype = Object.assign({}, falar, comer);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome, writable: true },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Tiago", "Possidonio");
const p2 = criaPessoa("Maria", "Possidonio");

console.log(p1);
console.log(p2.nome);
