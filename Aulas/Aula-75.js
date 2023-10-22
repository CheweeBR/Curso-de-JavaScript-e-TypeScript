// Factory Functions

function criaObjeto(nome,sobrenome, peso, altura) {
    return {
        nome, sobrenome,
        fala: function(assunto) {
            return `${nome} está falando ${assunto} e seu peso é ${peso} KG`;
        },
        peso,
        altura,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const obj1 = criaObjeto('Tiago', 'Possidonio', 85, 1.71);
console.log(obj1.fala("Falando sobre Valorant"), "seu IMC é:", obj1.imc());

// Construction Function 

function criaObjeto2(nome,sobrenome, peso, altura) {
    return {
        nome, sobrenome, peso, altura,

        fala: function(assunto) {
            return `${nome} está falando ${assunto} e seu peso é ${peso} KG`;
        },


        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter

        set nomeCompleto(valor) {
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }

    }
}

const obj2 = criaObjeto2('Geovanna', 'Pelissari', 43, 1.59);
console.log(obj2.fala("Falando sobre Fisioterapia"), "seu IMC é:", obj2.imc, `e seu nome completo é: ${obj2.nomeCompleto}`);
console.log(obj2.nome);
console.log(obj2.sobrenome);
//usando setter
obj2.nomeCompleto = "Arthur Rodrigues Possidonio";
console.log(obj2.nome);
console.log(obj2.sobrenome);