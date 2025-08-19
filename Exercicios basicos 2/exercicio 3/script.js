let inputTarefa = document.getElementById("input-tarefa");
let botao = document.getElementById("botao-adicionar");
let lista = document.getElementById("lista-tarefas");

botao.addEventListener('click', function(){
  let tarefaNova = inputTarefa.value;
  let novoItem = document.createElement("li");
  novoItem.innerText = tarefaNova;
  novoItem.classList.add("lista")
  lista.appendChild(novoItem);
  if(inputTarefa.value != ""){
    inputTarefa.value = ("");
}

})

console.log("reseta");
