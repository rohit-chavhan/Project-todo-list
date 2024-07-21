function addProjectFunc() {
  const addProjects = document.querySelector('.addProjects');
  const addForm = document.querySelector('.addForm');
  const closeBtn = document.querySelector('.close');
  const formInput = document.querySelector('.formInput');
  const arrayToProjects = document.querySelector('.arrayToProjects');
  const clickEnter = document.querySelector('.clickEnter');

  const createProjects = () => {
    arrayToProjects.innerHTML = '';
    projects.forEach((el) => {
      const eachProject = document.createElement('button');
      eachProject.innerHTML = el;

      eachProject.classList.add('btn');
      arrayToProjects.append(eachProject);
    });
  };

  let projects = ['home', 'new features', 'planning', 'node projects'];

  createProjects();

  addProjects.addEventListener('click', function () {
    addForm.classList.remove('hideForm');
  });

  function hideForm() {
    addForm.classList.add('hideForm');
    projects.push(formInput.value);
    formInput.value = '';
    createProjects();
  }

  closeBtn.addEventListener('click', function () {
    hideForm();
  });

  clickEnter.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      hideForm();
    }
  });
}

export { addProjectFunc };
