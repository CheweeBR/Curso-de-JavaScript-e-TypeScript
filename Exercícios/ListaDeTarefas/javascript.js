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
  li.innerText = document.querySelector("#inputTarefa").value;
  listar.appendChild(li);

}
