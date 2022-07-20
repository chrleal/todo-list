import * as dom from "./dom";

const myTasks = [];

const taskFactory = (title, description, date, priority) => {
  return {title, description, date, priority}
}

function validateInput() {
  if (dom.title.value != ""){
    submitTask();
    console.log(myTasks);
    dom.resetDisplay();
  } else {
    dom.title.reportValidity();
  }
}

//Add new task
function submitTask(){
  const newTask = taskFactory(dom.title.value, dom.description.value, dom.date.value, dom.priority.value);
  myTasks.push(newTask);
}

const task = taskFactory('test', 'test', '19/07/22', 'high');
myTasks.push(task);
console.log(myTasks);

export {validateInput, myTasks}