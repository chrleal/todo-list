import * as todo from "./todo";

let indexTask;
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal-todo');
const modalTitle = document.querySelector('.modal-title');
const form = document.querySelector('#form-todo');
const formProject = document.querySelector('#form-project');
const title = document.querySelector('#title');
const titleProject = document.querySelector('#title-project')
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const closeButton = document.querySelector('.close');
const saveEditBtn = document.querySelector('#save-edit-button');
const addButton = document.querySelector('.add-button');
const todoContainer = document.querySelector('.todo-container');
const projectBtn = document.querySelector('#project-button');
const projectContainer = document.querySelector('.sidebar-project');
const heading = document.querySelector('.heading');
const sidebarBtns = document.querySelectorAll('.sidebar-item-content');

(function sidebarEventHandler(){
  sidebarBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      heading.textContent = btn.querySelector('p').textContent;
      removeAllTasks();
      showTask();
      addButton.style.display = 'flex';
      if (e.target.id != 'inbox'){
        addButton.style.display = 'none';
        removeAllTasks();
        showTask();
        // if (e.target.id == today){
          
        // }
      }
    })
  })
})();

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
    saveEditBtn.classList.remove('save-project');
    saveEditBtn.classList.remove('edit');
    saveEditBtn.classList.add('save');
    form.style.display = 'block';
    formProject.style.display = 'none';
  })

   projectBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalOverlay.style.display = 'block';
    modalTitle.textContent = "New Project";
    saveEditBtn.textContent = "Save";
    saveEditBtn.classList.remove('edit');
    saveEditBtn.classList.remove('save');
    saveEditBtn.classList.add('save-project');
    form.style.display = 'none';
    formProject.style.display = 'block';
    formProject.reset();
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
  saveEditBtn.addEventListener('click', () => {
    if (saveEditBtn.classList.contains('save')){
      todo.submitTask();
      removeAllTasks();
      showTask();
      console.log(todo.myTasks);
    } else if (saveEditBtn.classList.contains('edit')){
      todo.editTask(indexTask);
      removeAllTasks();
      showTask();
      console.log(todo.myTasks);
    } else if (saveEditBtn.classList.contains('save-project')){
      todo.submitProject();
      removeAllProjects()
      showProject();
      console.log(todo.myProjects)
    }
  })
})();

function showProject(){
  todo.myProjects.forEach((project) => {
    const newProject = document.createElement('div');
    newProject.classList.add('sidebar-project-content');
    newProject.setAttribute('id', 'project');
    newProject.textContent = project.title;
    projectContainer.appendChild(newProject);
    newProject.addEventListener('click', () => {
      addButton.style.display = 'flex';
      removeAllTasks();
      heading.textContent = project.title;
      showTask();
    })
  })
}

function showTask(){
  todo.myTasks.forEach((task, index) => {
    if (task.project == heading.textContent){
      const taskContainer = document.createElement('div');
      taskContainer.setAttribute('class', 'task-container')
      taskContainer.setAttribute('data-id', `${index}`)
      todoContainer.insertBefore(taskContainer, addButton);

      const taskCheck = document.createElement('input');
      taskContainer.appendChild(taskCheck);
      taskCheck.setAttribute('type', 'checkbox');

      const taskTitle = document.createElement('h2');
      taskTitle.classList.add('task-title');
      taskContainer.appendChild(taskTitle);
      taskTitle.textContent = task.title;

      const taskEditBtn = document.createElement('span');
      taskContainer.appendChild(taskEditBtn);
      taskEditBtn.setAttribute('class', 'material-icons-outlined edit-button');
      taskEditBtn.textContent = "edit_note";
      
      taskEditBtn.addEventListener('click', (e) => {
        indexTask = e.target.parentElement.getAttribute('data-id');
        modal.style.display = 'flex';
        modalOverlay.style.display = 'block';
        modalTitle.textContent = "Edit Task";
        saveEditBtn.textContent = "Edit";
        saveEditBtn.classList.remove('save-project');
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
    }
  })
}

function editModal(titleEdit, descriptionEdit, dateEdit, priorityEdit) {
  title.value = titleEdit;
  description.value = descriptionEdit;
  date.value = dateEdit;
  priority.value = priorityEdit;
}

function removeAllTasks(){
  const removeDiv = todoContainer.querySelectorAll('.task-container');
  removeDiv.forEach(div => div.remove());
}

function removeAllProjects(){
  const removeProject = projectContainer.querySelectorAll('#project');
  removeProject.forEach(div => div.remove());
}

export {heading, title, titleProject, description, date, priority, showTask, resetDisplay}