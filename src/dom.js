import * as todo from "./todo";

let indexTask;
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const closeButton = document.querySelector('.close');
const saveEditBtn = document.querySelector('#save-edit-button');
const addButton = document.querySelector('.add-button');
const todoContainer = document.querySelector('.todo-container');

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
    modalTitle.textContent = "New Task";
    saveEditBtn.textContent = "Save";
    saveEditBtn.classList.remove('edit');
    saveEditBtn.classList.add('save');
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
  saveEditBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('save')){
      todo.submitTask();
      resetDisplay();
      removeAll();
      showTask();
    } else if (e.target.classList.contains('edit')){
      todo.editTask(indexTask);
      resetDisplay();
      removeAll();
      showTask();
      console.log("dentro do botao" + indexTask)
    }
  })
})();

function showTask(){
  todo.myTasks.forEach((task, index) => {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task-container')
    taskContainer.setAttribute('data-id', `${index}`)
    todoContainer.insertBefore(taskContainer, addButton);

    const taskCheck = document.createElement('input');
    taskContainer.appendChild(taskCheck);
    taskCheck.setAttribute('type', 'checkbox');

    const taskTitle = document.createElement('h2');
    taskContainer.appendChild(taskTitle);
    taskTitle.textContent = task.title;

    const taskEditBtn = document.createElement('span');
    taskContainer.appendChild(taskEditBtn);
    taskEditBtn.setAttribute('class', 'material-icons-outlined edit-button');
    taskEditBtn.textContent = "edit_note";
    
    taskEditBtn.addEventListener('click', (e) => {
      indexTask = e.target.parentElement.getAttribute('data-id');
      console.log("dentro do lapis" + indexTask + index);
      modal.style.display = 'flex';
      modalOverlay.style.display = 'block';
      modalTitle.textContent = "Edit Task";
      saveEditBtn.textContent = "Edit";
      saveEditBtn.classList.remove('save');
      saveEditBtn.classList.add('edit');
      editModal(task.title, task.description, task.date, task.priority);
    })

    const taskDeleteBtn = document.createElement('span');
    taskContainer.appendChild(taskDeleteBtn);
    taskDeleteBtn.setAttribute('class', 'material-icons-outlined delete-button');
    taskDeleteBtn.textContent = "delete_outline";

    taskDeleteBtn.addEventListener('click', () => {
      console.log(task);
      todoContainer.removeChild(taskContainer);
      todo.deleteTask(task);
    })
  })
}

function editModal(titleEdit, descriptionEdit, dateEdit, priorityEdit) {
  title.value = titleEdit;
  description.value = descriptionEdit;
  date.value = dateEdit;
  priority.value = priorityEdit;
}

function removeAll(){
  const removeDiv = todoContainer.querySelectorAll('.task-container');
  removeDiv.forEach(div => div.remove());
}

export {title, description, date, priority, showTask}