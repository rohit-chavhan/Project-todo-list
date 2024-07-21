const addProjects = document.querySelector('addProjects');
console.log(projects);

addProjects.addEventListener('click', addProjectFunc);

let projects = ['new features', 'planning', 'node projects'];

function addProjectFunc() {
  console.log('red');
}

export { addProjects, projects, addProjectFunc };
