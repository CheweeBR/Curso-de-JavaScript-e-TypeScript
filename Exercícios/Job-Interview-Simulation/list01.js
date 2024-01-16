//Implemente uma função que receba um array de números e retorne o maior número.

let array = [0,1,2,3,4,5,6,7,8,9];
function Maior(a) {
    var maior = 0;
    if (a) {
        for(let c=0;c<a.length; c++) {
            if(maior < a[c]) {
                maior = a[c];
            }
        }
        return maior;
    } else {
        return "Array está vazio!";
    }
}

console.log(Maior(array));

//Implemente um algoritmo de busca binária.

//Implemente um padrão de design Singleton.

//Escreva um componente React que exibe uma lista de itens.

//Defina um tipo de dados personalizado para representar uma pessoa.

const Pessoa = {
    Nome: '',
    idade: 0,
    CPF: '',
    Endereco: ''
}

let p = new Pessoa;
p.Nome = "Tiago";
p.idade = 20;
p.Endereco = "Laerte Pelizer";
p.CPF = '111.222.333-44';
console.log(p);