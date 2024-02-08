//Declarando elementos que serão utilizados

const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];
//adicionando eventos

//Evento submit do botao do form
form.addEventListener("submit", (evento) => {
  evento.preventDefault(); //Evita o comportamento padrão de recarregar a página ao submeter o form

  //atribuir o texto digitado no 'input' a uma variavel
  const taskTitle = taskTitleInput.value;

  //Se o texto for muito curto, cairá num return vazio e finalizará o evento
  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter, pelo menos, 4 caracteres");
    return;
  }

  //Adicionando para o array a nova tarefa que está no taskTitle
  tasks.push(taskTitle);

  /* CRIANDO NOVOS ELEMENTOS HTML */

  //Adicionando a nova tarefa no HTML
  const novaLi = document.createElement("li"); //Crio uma tag li

  //Criando uma nova tag <input>
  const inputCheckBox = document.createElement("input");
  inputCheckBox.setAttribute("type", "checkbox"); //adciono um atributo 'type' com o valor de 'checkbox' a esse <input>

  //Criando uma nova tag <span>
  const spanNovaTarefa = document.createElement("span");
  spanNovaTarefa.textContent = taskTitle; //A nova tarefa fica dentro do span

  //Criando uma nova tag <button>
  const buttonRemover = document.createElement("button");
  buttonRemover.textContent = "Remover"; //conteudo do botao

  // ---------------------------------------------------------

  /*  Crios os elementos HTML -> jogo eles na nova <li> -> jogo a nova <li>
  dentro da <ul> */

  novaLi.appendChild(inputCheckBox); //checkbox pra dentro da li
  novaLi.appendChild(spanNovaTarefa); //span pra dentro da li
  novaLi.appendChild(buttonRemover); //button pra dentro da li
  todoListUl.appendChild(novaLi); //Adiciono ela ao final da UL

  //Pra limpar o input após adicionar a tarefa
  taskTitleInput.value = "";
});
