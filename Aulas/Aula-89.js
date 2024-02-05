// Revisando objetos


// 1° Forma
const Pessoa = {
    nome: '',
    sobrenome: ''
}

// 2° Forma
const Pessoa1 = new Object();

// 3° Forma
// Factory Functions & Constructor Functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }  
    };
}

function People(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new People('Tiago', 'Possidonio');



