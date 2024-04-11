// Métodos estáticos

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  // método de instância <- acessado por instância (const controle01 = new ControleRemoto("Samsung"))
  aumentarVolume() {
    this.volume++;
  }
  // método de instância <- acessado por instância (const controle01 = new ControleRemoto("Samsung"))
  diminuirVolume() {
    this.volume--;
  }

  // Método estático <- Acessado apenas com a classe (ControleRemoto.trocaPilha)
  static trocaPilha() {
    console.log(`Trocando pilha`);
  }
}
