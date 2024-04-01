function validacao() {
  let inputCPF = document.querySelector("#inputCPF").value;
  let CPF = inputCPF.replace(/[.-]/g, "");
  if (inputCPF == "") {
    alert("Campo vazio.");
  } else if (CPF.length != 11) {
    alert("Valor inválido.");
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
    } else {
      alert("CPF Inválido!");
    }
  }
}
