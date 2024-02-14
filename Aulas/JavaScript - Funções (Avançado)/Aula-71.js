// Escopo Lexíco

// Básicamente o conceito de váriavel global, busca a variável nas funções pais

const nome = 'Tiago';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}

usaFalaNome();