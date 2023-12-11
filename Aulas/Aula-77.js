// Função construtora -> Objetos
// Função fabrica -> Objetos

// Construtora -> Sempre iniciar com letra maiúscula. ex: Anime (new)

function Anime(titulo, descricao) {
    const id = 1

    this.titulo = titulo;
    this.descricao = descricao;

    this.avaliar = function() {
        const avalia = nota1 + nota2 / 2;
        console.log(`média: ${avalia}`);
    }

}

const anime1 = new Anime("One Piece", "Pirata que estica", 9,10);
const anime2 = new Anime("Hunter X Hunter", "Muita porradaria", 5,7);

console.log(anime1,anime2);