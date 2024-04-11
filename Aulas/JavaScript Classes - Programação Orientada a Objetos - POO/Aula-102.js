// Criando classes

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar(mensagem) {
    console.log(`${this.nome}: ${mensagem}`);
  }
}

const p1 = new Pessoa("Tiago", "Possidonio");
