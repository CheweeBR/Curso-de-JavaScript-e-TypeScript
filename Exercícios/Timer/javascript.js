const relogio = document.querySelector("#hora");
let segundos = 0;
let timer;

function getHourSeconds(segundos) {
  let data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getHourSeconds(segundos);
  }, 1000);
}

function Iniciar() {
  iniciaRelogio();
}

function Pausar() {
  clearInterval(timer);
}

function Zerar() {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
}
