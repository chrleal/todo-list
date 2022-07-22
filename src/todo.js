import * as dom from "./dom";

let validate;
const myTasks = [];
const myProjects = [];

const taskFactory = (title, description, date, priority, project) => {
  return {title, description, date, priority, project}
}

const projectFactory = (title) => {
  return {title}
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
    const newTask = taskFactory(dom.title.value, dom.description.value, dom.date.value, dom.priority.value, dom.heading.textContent);
    myTasks.push(newTask);
    dom.resetDisplay();
  } else {
    dom.title.reportValidity();
  }
}

function submitProject() {
  if (validateInput() == true) {
    const newProject = projectFactory(dom.titleProject.value);
    myProjects.push(newProject);
    dom.resetDisplay();
  } else {
    dom.title.reportValidity();
  }
}

function selectProject(){
  
}

function deleteTask(task){
  myTasks.splice(myTasks.indexOf(task), 1)
}

function editTask(index) {
  if (validateInput() == true) {
    myTasks[index].title = dom.title.value;
    myTasks[index].description = dom.description.value;
    myTasks[index].date = dom.date.value;
    myTasks[index].priority = dom.priority.value;
    dom.resetDisplay();
  }
}

const task = taskFactory('test', 'test', '19/07/22', 'high');
myTasks.push(task);
console.log(myTasks);

export {myTasks, myProjects, submitTask, deleteTask, editTask, submitProject}