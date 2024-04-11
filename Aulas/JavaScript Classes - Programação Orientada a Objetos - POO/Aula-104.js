// Heranças

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.estado = false;
  }

  ligar() {
    if (this.estado) {
      console.log(this.nome + " já está ligado.");
    } else {
      this.estado = true;
    }
  }

  desligar() {
    if (!this.estado) {
      console.log(this.nome + " já está desligador.");
    } else {
      this.estado = false;
    }
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, armazenamento, model) {
    super(nome);
    this.cor = cor;
    this.model = model;
    this.armazenamento = armazenamento;
  }
  Ligacao(numero) {
    return console.log(`Realizando ligação para ${numero}`);
  }
}

class SmartWatch extends DispositivoEletronico {
  constructor(nome, cor, marca, tamanho, material) {
    super(nome);
    this.cor = cor;
    this.marca = marca;
    this.tamanho = tamanho;
    this.material = material;
  }
}
