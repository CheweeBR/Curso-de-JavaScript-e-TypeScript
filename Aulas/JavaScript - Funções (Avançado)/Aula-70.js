// Return
// Retorna um valor
// Termina a função

function soma(a,b){
    return a + b;
}

function soma2(a,b) {
    console.log(a + b);
}

//ambas fazem a conta, porém, uma retorna o valor da soma e outra Undefined.

soma(2,3);
soma2(2,3);

/* Não retorna valor algum, porém, cumpre seu papel.
document.addEventListener('click', function () {
    document.body.style.backgroundColor = "red";
});*/


// função para criar objetos, deixando o código mais clean

function criaPessoa(nome,sobrenome) {
    return {nome , sobrenome}
}

const p1 = criaPessoa("Tiago", "Possidonio");
const p2 = {
    nome: 'Tiago',
    sobrenome: 'Possidonio'
}

console.log(p1,p2);

// função que retorna função

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase("olá"); // a const olaMundo se transforma em uma função.

console.log(olaMundo('Mundo'));

// Utilidade do conteúdo acima ^

function CriaMultiplicador(mult) {
    return function multiplicador(n){
        return n + mult;
    }
}


const duplica = CriaMultiplicador(2);
const triplica = CriaMultiplicador(3);

console.log(duplica(3));
console.log(triplica(3));
console.log(CriaMultiplicador(3));

