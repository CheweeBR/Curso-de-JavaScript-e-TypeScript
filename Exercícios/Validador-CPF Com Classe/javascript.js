class Pessoa {
  constructor(nome) {
    this.nome = nome;
    this.cpf = null;
  }

  validacao(CPF) {
    if (CPF.length != 11) {
      alert("Valor inválido.");
      return null;
    } else {
      let primeiroDig = 0;
      let segundoDig = 0;
      let contador = 10;
      let vetor = CPF.slice(0, 9);
      console.log(vetor);
      for (let c = 0; c < vetor.length; c++) {
        primeiroDig += vetor[c] * contador;
        contador--;
      }
      primeiroDig = 11 - (primeiroDig % 11);
      if (primeiroDig > 9) primeiroDig = 0;
      console.log(primeiroDig);

      contador = 11;
      vetor = CPF.slice(0, 10);
      console.log(vetor);

      for (let c = 0; c < vetor.length; c++) {
        segundoDig += vetor[c] * contador;
        contador--;
      }
      segundoDig = 11 - (segundoDig % 11);
      if (segundoDig > 9) segundoDig = 0;
      console.log(segundoDig);
      vetor = CPF.slice(0, 9);
      vetor += primeiroDig.toString();
      vetor += segundoDig.toString();
      console.log(vetor);
      if (vetor == CPF) {
        alert("CPF Válido!");
        return CPF;
      } else {
        alert("CPF Inválido!");
        return null;
      }
    }
  }
}

function cadastrar() {
  let nome = document.querySelector("#inputName").value;
  let inputCPF = document.querySelector("#inputCPF").value;
  let CPF = inputCPF.replace(/[.-]/g, "");
  if (inputCPF == "") {
    alert("Campo vazio.");
  } else {
    const usuario = new Pessoa(nome);
    usuario.cpf = usuario.validacao(CPF);
    console.log(usuario);
  }
}
