// Closures = habilidade da função em acessar os escopos lexicos.

function criaOutraFuncao() {
    const nome = 'Tiago'
    return function() {
        return nome;
    }
}

const func = criaOutraFuncao();
console.log(func);