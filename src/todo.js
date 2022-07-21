import * as dom from "./dom";

let validate;
const myTasks = [];

const taskFactory = (title, description, date, priority) => {
  return {title, description, date, priority}
}

function validateInput() {
  if (dom.title.value != ""){
    return validate = true;
  } else {
    dom.title.reportValidity();
    return validate = false;
  }
}

function submitTask(){
  if (validateInput() == true) {
    const newTask = taskFactory(dom.title.value, dom.description.value, dom.date.value, dom.priority.value);
    myTasks.push(newTask);
    console.log(myTasks);
  }
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
  }
}

const task = taskFactory('test', 'test', '19/07/22', 'high');
myTasks.push(task);
console.log(myTasks);

export {myTasks, submitTask, deleteTask, editTask}