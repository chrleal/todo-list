import * as dom from "./dom";

let validate;
const myTasks = [];
const myProjects = [];

const taskFactory = (title, description, date, priority, project, checkbox) => {
  return {title, description, date, priority, project, checkbox}
}

const projectFactory = (title) => {
  return {title, tasks: []}
}

function validateInput() {
  if (dom.title.value != "" || dom.titleProject.value != ""){
    return validate = true;
  } else {
    return validate = false;
  }
}

function submitTask(){
  if (validateInput() == true) {
    const newTask = taskFactory(dom.title.value, dom.description.value, dom.date.value, dom.priority.value, dom.heading.textContent, 'unchecked');
    myTasks.push(newTask);
    if (dom.saveEditBtn.classList.contains('save-project-task')){
      myProjects.find(item => item.title == dom.heading.textContent).tasks.push(newTask);
    }
    dom.resetDisplay();
  } else {
    dom.title.reportValidity();
    dom.titleProject.reportValidity();
  }
}

function submitProject() {
  if (validateInput() == true) {
    if (myProjects.find(item => item.title == dom.titleProject.value)){
      dom.titleProject.setCustomValidity('This title has been used');
      dom.titleProject.reportValidity();
      return
    }
    const newProject = projectFactory(dom.titleProject.value);
    myProjects.push(newProject);
    dom.resetDisplay();
  } else {
    dom.titleProject.setCustomValidity('');
    dom.titleProject.reportValidity();
  }
}

function selectProject(){
  
}

function deleteTask(task){
  myTasks.splice(myTasks.indexOf(task), 1);
  if (myProjects.find(item => item.title == task.project)){
    myProjects.find(item => item.title == task.project).tasks.splice(myProjects.find(item => item.title == task.project).tasks.indexOf(task), 1);
  }
}

function editTask(index) {
  if (validateInput() == true) {
    myTasks[index].title = dom.title.value;
    myTasks[index].description = dom.description.value;
    myTasks[index].date = dom.date.value;
    myTasks[index].priority = dom.priority.value;
    if (myProjects.find(item => item.title == myTasks[index].project)){
      myProjects.find(item => item.title == myTasks[index].project).tasks.splice(myProjects.find(item => item.title == myTasks[index].project).tasks[index], 1, myTasks[index]);
    }
    dom.resetDisplay();
  }
}

// const task = taskFactory('test', 'test', '19/07/22', 'high');
// myTasks.push(task);

export {myTasks, myProjects, submitTask, deleteTask, editTask, submitProject}