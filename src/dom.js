import * as todo from "./todo";

const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const closeButton = document.querySelector('.close');
const saveBtn = document.querySelector('#save');
const addButton = document.querySelector('.add-button');
const todoContainer = document.querySelector('.todo-container');

showTask();

(function toggleModal(){
    showModal();
  if (showModal){
    closeModal();
  }
})();

function showModal(){
  addButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalOverlay.style.display = 'block';
  })
}

function closeModal(){
  modalOverlay.addEventListener('click', resetDisplay);
  closeButton.addEventListener('click', resetDisplay);
}

function resetDisplay() {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
  form.reset();
}

(function submitForm(){
  saveBtn.addEventListener('click', () => {
    todo.validateInput();
    removeAll();
    showTask();
  })
})();

function showTask(){
  todo.myTasks.forEach((task) => {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task')
    todoContainer.insertBefore(taskContainer, addButton);

    const taskCheck = document.createElement('input');
    taskContainer.appendChild(taskCheck);
    taskCheck.setAttribute('type', 'checkbox');
  
    const taskTitle = document.createElement('h2');
    taskContainer.appendChild(taskTitle);
    taskTitle.textContent = task.title;
  })
}

function removeAll(){
  const removeDiv = todoContainer.querySelectorAll('.task');
  removeDiv.forEach(div => div.remove());
}

export {title, description, date, priority, form, resetDisplay}