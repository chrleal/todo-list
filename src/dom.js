import * as todo from "./todo";
import { differenceInDays , isToday} from 'date-fns';

let indexTask;
let filteredTasks;
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
const projectBtn = document.querySelector('#add-project');
const projectContainer = document.querySelector('.sidebar-project');
const heading = document.querySelector('.heading');
const sidebarBtns = document.querySelectorAll('.sidebar-item-content');

(function sidebarEventHandler(){
  sidebarBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      heading.textContent = btn.querySelector('p').textContent;
      removeAllTasks();
      showTask(todo.myTasks);
      addButton.style.display = 'flex';
      saveEditBtn.removeAttribute('class');
      saveEditBtn.classList.add('save-inbox-task');
      switch (e.target.id){
        case 'today':
          filteredTasks = todo.myTasks.filter(task => isToday(new Date(task.date.replace(/-/g, '\/'))));
          console.log('click');
          removeAllTasks();
          showTask(filteredTasks);
          addButton.style.display = 'none';
          break;
        case 'upcoming':
          filteredTasks = todo.myTasks.filter(task => {
            const totalDays = differenceInDays(new Date(task.date.replace(/-/g, '\/')), new Date());
            if (totalDays >= 0 && totalDays <= 6){
              return task
            }
          })
          removeAllTasks();
          showTask(filteredTasks);
          addButton.style.display = 'none';
          break;
        case 'important':
          filteredTasks = todo.myTasks.filter(task => (task.priority == 'high'));
          removeAllTasks();
          showTask(filteredTasks);
          addButton.style.display = 'none';
          break;
        case 'completed':
          filteredTasks = todo.myTasks.filter(task => (task.checkbox == 'checked'));
          removeAllTasks();
          showTask(filteredTasks);
          addButton.style.display = 'none';
          break;
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
    form.style.display = 'block';
    formProject.style.display = 'none';
  })

   projectBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalOverlay.style.display = 'block';
    modalTitle.textContent = "New Project";
    saveEditBtn.textContent = "Save";
    saveEditBtn.removeAttribute('class');
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
    if (saveEditBtn.classList.contains('save-inbox-task')){
      todo.submitTask();
      removeAllTasks();
      showTask(todo.myTasks);
      console.log(saveEditBtn.className, todo.myTasks);
    } else if (saveEditBtn.classList.contains('save-project-task')){
      todo.submitTask();
      removeAllTasks();
      showTask(todo.myProjects.find(item => item.title == heading.textContent).tasks);
      console.log(todo.myTasks, todo.myProjects);
    } else if (saveEditBtn.classList.contains('save-project')){
      todo.submitProject();
      removeAllProjects();
      showProject();
      console.log(saveEditBtn.className, todo.myProjects);
    } else if (saveEditBtn.classList.contains('edit-task')){
      todo.editTask(indexTask);
      removeAllTasks();
      showTask(todo.myTasks);
      console.log(saveEditBtn.className, todo.myTasks);
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
      removeAllTasks();
      filteredTasks = todo.myTasks.filter(task => (task.project == project.title));
      addButton.style.display = 'flex';
      heading.textContent = project.title;
      showTask(filteredTasks);
      // console.log('showproject', filteredTasks, todo.myTasks);
      saveEditBtn.removeAttribute('class');
      saveEditBtn.classList.add('save-project-task');
    })
  })
}

(function projectEventHandler(){
  
})();

function showTask(tasks){
  if (tasks) {
    tasks.forEach((task, index) => {
      const taskContainer = document.createElement('div');
      taskContainer.setAttribute('class', 'task-container')
      taskContainer.setAttribute('data-id', `${index}`)
      todoContainer.insertBefore(taskContainer, addButton);

      const taskCheck = document.createElement('input');
      taskContainer.appendChild(taskCheck);
      taskCheck.setAttribute('type', 'checkbox');

      if (task.checkbox == 'unchecked'){
        taskCheck.removeAttribute('checked', true);
      } else {
        taskCheck.setAttribute('checked', true);
      }

      taskCheck.addEventListener('click', () => {
        if (task.checkbox == 'unchecked'){
          taskCheck.removeAttribute('checked', false);
          taskCheck.setAttribute('checked', true);
          task.checkbox = 'checked';
        } else {
          taskCheck.removeAttribute('checked', true);
          taskCheck.setAttribute('checked', false);
          task.checkbox = 'unchecked';
        }
      })

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
        saveEditBtn.removeAttribute('class');
        saveEditBtn.classList.add('edit-task');
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

export {heading, saveEditBtn, title, titleProject, description, date, priority, showTask, resetDisplay}