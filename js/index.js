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

  //Adicionando a nova tarefa no HTML
  const novaLi = document.createElement("li"); //Crio uma tag li
  
  const inputCheckBox = document.createElement('input') //Criando uma nova tag <input>
  inputCheckBox.setAttribute('type', 'checkbox') //adciono um atributo 'type' com o valor de 'checkbox' a esse <input>



  todoListUl.appendChild(novaLi); //Adiciono ela ao final da UL

  taskTitleInput.value = '' //Pra limpar o input após adicionar a tarefa
});
