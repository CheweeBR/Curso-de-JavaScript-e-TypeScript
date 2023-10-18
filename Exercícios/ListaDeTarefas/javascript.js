const tarefa = {
  objetivo: "",
};

const inputTarefa = document.querySelector("#inputTarefa");
let list = [];
let contador=0;

function Adicionar() {
  let task = tarefa;
  try {
    if(inputTarefa.value != "") {
      task.objetivo = inputTarefa.value;
      list.push(task.objetivo);
      SalvarLocalStorage();
      ApresentarTarefa();
    }
    else {
      throw new Error;
    }
    
  } catch(err) {
    alert('A Tarefa não pode estar vazia!');
  }
}

function ApresentarTarefa() {
  let listar = document.querySelector("#lista");
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.innerText = "Checar";
  button.classList.add("botaoChecar");
  li.innerText = inputTarefa.value;
  li.classList.add("liStyle");
  listar.appendChild(li);
  li.appendChild(button);
  Limpar();
}

function Limpar(){
  inputTarefa.value = "";
}

function SalvarLocalStorage() {
  const listJSON = JSON.stringify(list);
  localStorage.setItem('lista',listJSON);
}

inputTarefa.addEventListener("keypress", function(e) {
  if(e.keyCode === 13){
    Adicionar();
  }
})

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains('botaoChecar')){
    let li = el.parentElement
    li.classList.add('liStyleDone');
    el.style.display = 'none';
    SalvarLocalStorage();
  }
})
