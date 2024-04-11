// getters and setters

class Carro {
  constructor(marca) {
    this.marca = marca;
    this.velocidade = { value: 0, writable: false };
  }

  acelerar() {
    if (this.velocidade <= 150) {
      return this.velocidade++;
    }
  }

  freiar() {
    if (this.velocidade <= 0) {
      return this.velocidade--;
    }
  }
}

const carro = new Carro("Lancer");

for (let c = 0; c <= 160; c++) {
  carro.acelerar();
}

console.log(carro);
