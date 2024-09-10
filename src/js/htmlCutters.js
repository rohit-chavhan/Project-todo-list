import {
  projectArray,
  projectClosedValues,
  refreshingLocalStorage,
} from './calculationLayer';

function buttonCutter(objName) {
  let button = document.createElement('button');
  button.innerHTML = objName;
  button.classList.add('btn');
  return button;
}

function taskCutter({ title, desciption, date, priority, completed }) {
  let checkboxState = completed ? 'checked' : '';
  let addingDashedClass = completed ? 'text-decor' : 'no-lines';

  let element = `
              <div class="position-check">
                <label class="container">
                  <input class="checkbox" name='task' type="checkbox" ${checkboxState} />
                  <label for='task'></label>
                </label>
              </div>
              <div class="titles">      
                <p class=${addingDashedClass} >${title}</p>
                <p><u id="priority" class=${priority}>${priority}-priority </u></p>
              </div>
              <div class="date">
                <p>due date</p>
                <p >${date}</p>
              </div>
              <div class="task-btn">
              <button class="btn">view</button>
                <button class="btn">edit</button>
                <button class="btn">delete</button>
              </div>`;
  refreshingLocalStorage();
  return element;
}

const mainForm = `    
                   <form action="" id="form">
                <div class="input-row">
                  <label for="title">Title: </label>
                  <input type="text" name="title" id="taskTitle" />
                </div>
                <div class="input-row">
                  <label for="description">Description: </label>
                  <input type="text" name="description" id="taskDescription" />
                </div>
                <div class="input-row">
                  <label for="dueDate">Due date: </label>
                  <input type="date" name="dueDate" id="taskDate" />
                </div>
                <div class="input-row">
                  <label for="priority">Priority: </label>
                  <select name="priority" id="taskPriority">
                  <option value="low">low priority</option>
                  <option value="medium">medium priority</option>
                  <option value="high">high priority</option>
                  </select>
                </div>`;

const chooseProjo = `
<label for="choose project">Project: </label>
<select name="choose project" id="chooseProject"></select>
`;

const buttons = `
<div class="input-row">
<button class="submit btn">submit</button>
<button class="cancel btn">cancel</button>
</div>
                </form>`;

const formHtml = `
            ${mainForm}
            ${chooseProjo}
            ${buttons}
      `;

function formCutter() {
  const form = document.createElement('div');
  form.classList.add('taskInfo');
  form.innerHTML = formHtml;
  return form;
}

function chooseProjectFormOption() {
  const projectNamesOptions = form.querySelector('#chooseProject');

  for (const key in projectArray) {
    const options = document.createElement('option');
    options.value = key;
    options.textContent = key;
    if (key === projectClosedValues.getProject()) {
      options.selected = true;
    }
    projectNamesOptions.appendChild(options);
  }
}

export {
  buttonCutter,
  taskCutter,
  formCutter,
  chooseProjectFormOption,
  mainForm,
};
