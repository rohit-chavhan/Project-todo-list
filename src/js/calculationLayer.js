const projectArray = {};

function createProject(name) {
  projectArray[name] = [];
}

const projectClosedValues = projectValues();

class task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.completed = false;
  }
  toggleTask() {
    this.completed = this.completed === false ? true : false;
  }
}

function projectValues() {
  let project = '';

  const addProject = (player) => {
    project = player;
  };

  const getProject = () => project;

  return {
    addProject,
    getProject,
  };
}

function addTask(task) {
  projectArray[projectClosedValues.getProject()].push(task);
}

function removeTask(index = 0) {
  projectArray[projectClosedValues.getProject()].splice(index, 1);
}

function changePrority(index, value) {
  projectArray[projectClosedValues.getProject()][index].priority = value;
}

// to remove the below function
function taskCompleted(index) {
  projectArray[projectClosedValues.getProject()][index].completed = true;
}

createProject('building game');

export {
  projectArray,
  createProject,
  task,
  projectValues,
  addTask,
  removeTask,
  changePrority,
  taskCompleted,
  projectClosedValues,
};
