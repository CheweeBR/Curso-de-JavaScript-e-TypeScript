// definePropertu - defineProperties

function Product(name, price, estoque) {
    this.name = name;
    this.price = price;
    Object.defineProperties(this, {
        name: {
            enumerable: true, //mostrar chave
            configurable: false, // possibilidade de configurar a propriedade
            get: function() {
                return name;
            },
            set: function(valor) {
                name = valor
            }
        },
        price: {
            enumerable: true, //mostrar chave
            configurable: true, // possibilidade de configurar a propriedade
            get: function() {
                return price;
            },
            set: function(valor) {
                price = valor;
            }
        }, 
        estoque:  {
        enumerable: true, //mostrar chave
        configurable: true, // possibilidade de configurar a propriedade
        get: function() {
            return estoque;
        },
        set: function(valor) {
            estoque = valor;
        }
        }
    })
}

let VetorArroz = [];

for(let c = 1; c <= 5; c++) {
    VetorArroz[c] = new Product("Arroz"+c, c*2.5, c);
}

for(let c = 1; c <= 5; c++) {
    console.log("--------------\n",VetorArroz[c].name,"\n",VetorArroz[c].price,"\n",VetorArroz[c].estoque);
}