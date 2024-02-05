// definePropertu - defineProperties

function Product(name, price, estoque) {
    this.name = name;
    this.price = price;

    Object.defineProperty( this, 'estoque', {
        enumerable: true, //mostrar chave
        value: estoque,
        writable: true, // possibilidade de alterar valor
        configurable: true // possibilidade de configurar a propriedade
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true, //mostrar chave
            value: name,
            writable: false, // possibilidade de alterar valor
            configurable: false // possibilidade de configurar a propriedade
        },
        price: {
            enumerable: true, //mostrar chave
            value: price,
            writable: true, // possibilidade de alterar valor
            configurable: true // possibilidade de configurar a propriedade
        }
    })
}
const arroz = new Product('Arroz', 15.99 , 10);
arroz.estoque = 100;
console.log(arroz);