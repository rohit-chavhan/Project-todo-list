import {
  projectArray,
  createProject,
  task,
  addTask,
  removeTask,
  projectClosedValues,
  refreshingLocalStorage,
} from './calculationLayer';

import { formateMonth, formateDay } from './dateFormter';
import {
  buttonCutter,
  taskCutter,
  formCutter,
  chooseProjectFormOption,
  mainForm,
} from './htmlCutters';

function addProjectFunc() {
  const addProjects = document.querySelector('.addProjects');
  const addForm = document.querySelector('.addForm');
  const closeBtn = document.querySelector('.close');
  const formInput = document.querySelector('.formInput');
  const arrayToProjects = document.querySelector('.arrayToProjects');
  const clickEnter = document.querySelector('.clickEnter');
  const taskDiv = document.querySelector('.tasks');
  const clearBtn = document.querySelector('.clearSession');

  clearBtn.addEventListener('click', () => {
    localStorage.clear();
  });

  function getArrayOutOfObj(propertyName) {
    let array = projectArray[propertyName];
    return array;
  }

  function renderBtnAndTasks() {
    clearTaskDiv();
    taskDiv.append(addTasksBtn());
    actionForEachTasks(getArrayOutOfObj(projectClosedValues.getProject()));
  }

  function actionForSubmitClick() {
    const title = document.querySelector('#taskTitle').value;
    const description = document.querySelector('#taskDescription').value;
    const dueDate = document.querySelector('#taskDate').value;
    const priority = document.querySelector('#taskPriority').value;
    let month = undefined;
    const projectValue = document.querySelector('#chooseProject').value;

    month =
      dueDate !== ''
        ? `${formateMonth(dueDate)} ${formateDay(dueDate)}`
        : (month = undefined);

    if (title === '') {
    } else {
      const creatingTaskObj = new task(title, description, month, priority);
      addTask(creatingTaskObj, projectValue);
    }
    renderBtnAndTasks();
  }

  const createProjects = () => {
    arrayToProjects.innerHTML = '';

    for (const key in projectArray) {
      if (key !== '') {
        const eachProject = buttonCutter(key);

        eachProject.addEventListener('click', () =>
          actionForProjectsBtn(eachProject, projectArray)
        );

        arrayToProjects.append(eachProject);
      }
    }
  };

  function actionForProjectsBtn(name, array) {
    let projectName = name.innerHTML;
    projectClosedValues.addProject(projectName);
    let rays = array[projectName];
    clearTaskDiv();
    taskDiv.innerHTML = '';
    taskDiv.append(addTasksBtn());
    actionForEachTasks(rays);
  }

  function clearTaskDiv() {
    taskDiv.innerHTML = '';
  }

  function addTasksBtn() {
    let addBtn = document.createElement('button');
    addBtn.classList.add('btn');
    addBtn.innerText = 'Add tasks +';
    addBtn.addEventListener('click', taskInfoPopUp);
    return addBtn;
  }

  function actionForEachTasks(array) {
    array.forEach((el, i) => {
      let divEachTask = document.createElement('div');
      divEachTask.classList.add('each-task');
      divEachTask.innerHTML = taskCutter(el);
      divEachTask.addEventListener('change', (event) => {
        if (event.target.checked === true) {
          el.completed = true;
          renderBtnAndTasks();
        } else {
          el.completed = false;
          renderBtnAndTasks();
        }
      });

      divEachTask.addEventListener('click', (event) => {
        if (event.target.innerHTML === 'delete') {
          removeTask(i);
          renderBtnAndTasks();
          console.log('delete');
        }

        if (event.target.innerHTML === 'view') {
          let diScript =
            el.description === ''
              ? ''
              : `<p>description: ${el.description}</p>`;

          let dateScript =
            el.date === undefined ? '' : `<p>date: ${el.date}</p>`;

          document.querySelector('#box').innerHTML = `
          <dialog id="dialog" open>
          <h2>task</h2>
            <p>title: ${el.title}</p>
            ${diScript}
            ${dateScript}
            <p>priority: ${el.priority}</p>
            <button class='btn' id="close">close</button>
          </dialog>
          `;
          document.querySelector('#close').addEventListener('click', () => {
            document.querySelector('#box').innerHTML = '';
          });
        }

        if (event.target.innerHTML === 'edit') {
          document.querySelector('#box').innerHTML = `    
            <dialog id="dialog" open>
                <p> edit task </p>
                ${mainForm}
                <button class="btn" id="kafka">submit</button>
                <button class="btn" id="editClose">close</button>
            </dialog>`;

          document.querySelector('#taskTitle').value = el.title;
          document.querySelector('#taskDescription').value = el.description;
          document.querySelector('#taskDate').value = el.date;
          document.querySelector('#taskPriority').value = el.priority;
          document.querySelector('#editClose').addEventListener('click', () => {
            document.querySelector('#box').innerHTML = '';
          });

          document.querySelector('#kafka').addEventListener('click', () => {
            const title = document.querySelector('#taskTitle').value;
            const description =
              document.querySelector('#taskDescription').value;
            const dueDate = document.querySelector('#taskDate').value;
            const priority = document.querySelector('#taskPriority').value;
            let month = undefined;
            month =
              dueDate !== ''
                ? `${formateMonth(dueDate)} ${formateDay(dueDate)}`
                : (month = undefined);
            if (title === '') {
            } else {
              const creatingTaskObj = new task(
                title,
                description,
                month,
                priority
              );
              addTask(creatingTaskObj);
              refreshingLocalStorage();
            }

            removeTask(i);
            document.querySelector('#box').innerHTML = '';
            renderBtnAndTasks();
          });
        }
      });

      taskDiv.append(divEachTask);
    });
  }

  function taskInfoPopUp() {
    taskDiv.append(formCutter());

    chooseProjectFormOption();

    const formInsideDiv = document.querySelector('#form');
    formInsideDiv.addEventListener('submit', (event) => event.preventDefault());

    document.querySelector('.submit').addEventListener('click', () => {
      actionForSubmitClick();
    });

    document.querySelector('.cancel').addEventListener('click', () => {
      formInsideDiv.reset();
      renderBtnAndTasks();
    });
  }

  createProjects();

  addProjects.addEventListener('click', function () {
    addForm.classList.remove('hideForm');
  });

  function hideForm() {
    addForm.classList.add('hideForm');
    createProject(formInput.value);
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
