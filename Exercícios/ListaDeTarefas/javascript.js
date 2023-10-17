const tarefa = {
  objetivo: "",
  check: true,
};

const list = [];

function Adicionar() {
  let task = tarefa;
  task.objetivo = document.querySelector("#inputTarefa").value;
  task.check = false;
  list.push(task);
  ApresentarTarefa();
}

function ApresentarTarefa() {
  let listar = document.querySelector("#lista");
  var li = document.createElement("li");
  for (c = 0; (c = list.length); c++) {
    listar.appendChild(li) = c + "° tarefa: " + list[c];
  }
}
