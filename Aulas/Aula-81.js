//Resumo de Arrays

// Formas de declarar Arrays:

//Tradicional
const comida = ["arroz", "Feijão", "Batata"];

//Construtora
const film = new Array("The Last Of US", "BadBoys");

comida[2] = "Sushi";
delete comida[2];
console.log(comida);

// Quando ocorre uma declaração conforme abaixo, ambas as variáveis sofrem alteração:

const frutas = comida;
comida.push("Macarrão");
console.log("frutas:",frutas);

//Para ocorrer a cópia dos elementos e não apenas refêrencia deve utilizar '[...VAR]':

const biscoito = [...frutas];
biscoito.pop();
console.log(`Biscoito: ${biscoito}\nFrutas: ${frutas}`);

//Fatiar o array

const film1 = film.slice(0);