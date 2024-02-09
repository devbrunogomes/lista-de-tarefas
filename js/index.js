//Declarando elementos que serão utilizados

const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];
//adicionando eventos

//EVENTO: submit do botao do form
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
  tasks.push({
    title: taskTitle,
    done: false,
  });

  /* CRIANDO NOVOS ELEMENTOS HTML */

  //Adicionando a nova tarefa no HTML
  const novaLi = document.createElement("li"); //Crio uma tag li

  //Criando uma nova tag <input>
  const inputCheckBox = document.createElement("input");
  inputCheckBox.setAttribute("type", "checkbox"); //adciono um atributo 'type' com o valor de 'checkbox' a esse <input>

    //EVENTO: Marcando uma tarefa como concluida
    inputCheckBox.addEventListener('change', (event) => {
      //Pegar o elemento pai
      const liToToggle = event.target.parentElement

      const spanToToggle = liToToggle.querySelector('span')

      //True se estiver marcado, False se nao estiver
      const done = event.target.checked

      //Para riscar a tarefa se 'done' for true
      if (done) {
        spanToToggle.style.textDecoration = 'line-through'
      } else {
        spanToToggle.style.textDecoration = 'none'
      }

      //Para alterar o array das tasks, mudando o status de done
      tasks = tasks.map(t => {
        if (t.title === spanToToggle.textContent) {
          //Achando o titulo da tarefa atual, return o oposto de done
          return { 
            title: t.title,
            done: !t.done
          }
        } 
        //Nos objetos que nao forem igual ao titulo, retorna o objeto inalterado
        return t
      })
    })

  //Criando uma nova tag <span>
  const spanNovaTarefa = document.createElement("span");
  spanNovaTarefa.textContent = taskTitle; //A nova tarefa fica dentro do span

  //Criando uma nova tag <button> (remove)
  const buttonRemover = document.createElement("button");
  buttonRemover.textContent = "Remover"; //conteudo do botao

    //EVENTO: remover o <li>
    buttonRemover.addEventListener("click", (event) => {
      const liToRemove = event.target.parentElement; //pai do que disparou o evento

      const titleToRemove = liToRemove.querySelector("span").textContent; //Titulo da task a ser removida (para o array de tasks)

      //Filtro pra só ficar com as tarefas com o titulo diferente do que deve ser removido
      tasks = tasks.filter((t) => t.title !== titleToRemove);

      //Dentro da lista <ul> eu removo o pai do elemento que disparou o evento
      todoListUl.removeChild(liToRemove);
    });

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
