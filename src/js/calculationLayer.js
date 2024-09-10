let preloadedObj = {
  'building game': [
    {
      title: 'desiging characters',
      description: 'insipiration from iron man',
      date: 'Sep 11',
      priority: 'high',
      completed: false,
    },
    {
      title: 'design game weapons',
      description: 'insipiration from mario',
      date: 'Sep 12',
      priority: 'medium',
      completed: false,
    },
    {
      title: 'game engine',
      description: 'maybe unreal engine',
      date: 'Sep 4',
      priority: 'high',
      completed: true,
    },
    {
      title: 'game chapters / strategy',
      description: '',
      date: 'Sep 1',
      priority: 'low',
      completed: false,
    },
  ],
};

const refreshingLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(projectArray));
};

const projectArray =
  JSON.parse(localStorage.getItem('todos')) ||
  JSON.stringify(localStorage.setItem(preloadedObj));

refreshingLocalStorage();

function createProject(name) {
  projectArray[name] = [];
  refreshingLocalStorage();
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

function addTask(task, projectName = projectClosedValues.getProject()) {
  projectArray[projectName].push(task);
  refreshingLocalStorage();
}

function removeTask(index = 0) {
  projectArray[projectClosedValues.getProject()].splice(index, 1);
  refreshingLocalStorage();
}

export {
  projectArray,
  createProject,
  task,
  addTask,
  removeTask,
  projectClosedValues,
  refreshingLocalStorage,
};
