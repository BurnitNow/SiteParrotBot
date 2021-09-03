var tarefas = [];
function listartarefas() {
var ul = document.getElementById('tarefas');
ul.innerHTML = ""
tarefas.forEach((tarefas) => {
   let li = document.createElement('li')
   let check = document.createElement('input')
   check.setAttribute('type', 'checkbox')

   check.checked = tarefas.concluida

   li.append(check)
   li.append(tarefas.texto)
   ul.append(li)
})
}

function adicionartarefa(){
 let input = document.getElementById('nova-tarefa').value;
tarefas.push({
    texto: input,
    concluida: false,
    arquivada: false
})
listartarefas()
document.getElementById('nova-tarefa').value =""
}

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
  } 
  docReady(listartarefas)