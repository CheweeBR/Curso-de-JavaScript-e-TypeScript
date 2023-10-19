// Parâmetros de Funções

function funcao() {
    let total = 0;
    for (let args of arguments) {
        total += args
    }
    console.log(total);
}

funcao(1,2,3,4,5);