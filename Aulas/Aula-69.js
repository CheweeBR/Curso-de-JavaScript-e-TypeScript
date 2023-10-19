// Parâmetros de Funções

function funcao() {
    let total = 0;
    for (let args of arguments) {
        total += args
    }
    console.log(total);
}

funcao(1,2,3,4,5);

function funcaoComArgs(a,b,c) {
    let total = 0;
    for (let args of arguments) {
        total += args
    }
    console.log(total);
}

funcaoComArgs(1,2,3,4,5);

function funcaoComArgs2(a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f);
}

funcaoComArgs2(1,2,3);

function funcaoComArgs3(a , b = 2) {
    console.log(a + b);
}

funcaoComArgs3(4);

function funcaoComArgs4(a , b = 2, c=1) {
    console.log(a + b);
}

funcaoComArgs4(4, undefined, 2);

function funcaoComArgs5({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

funcaoComArgs5({nome: "Tiago", sobrenome: "Eloy", idade: 20});
// ou
objeto = {nome: "Tiago", sobrenome: "Eloy", idade: 20};
funcaoComArgs5(objeto);

function funcaoComArgs6([valor1,valor2,valor3]) {
    console.log(valor1,valor2,valor3);
}

funcaoComArgs6(["Tiago", "Eloy", 20]);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "/") acumulador /= numero;
        if(operador === "*") acumulador *= numero;
    }
    console.log(acumulador);
}

conta("+", 0, 1,2,3,4,5,6);
