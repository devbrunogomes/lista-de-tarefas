//Declarando elementos que serão utilizados

const form = document.querySelector('#todo-form')
const taskTitleInput = document.querySelector('#task-title-input')
const todoListUl = document.querySelector('#todo-list')

//adicionando eventos

form.addEventListener('submit', (evento) => {
  evento.preventDefault() //Evita o comportamento padrão de recarregar a página ao submeter o form
})