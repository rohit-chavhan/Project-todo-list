import { projectArray } from './calculationLayer';

function buttonCutter(objName) {
  let button = document.createElement('button');
  button.innerHTML = objName;
  button.classList.add('btn');
  return button;
}

function taskCutter(obj) {
  let checkboxState = obj.completed ? 'checked' : '';
  let addingDashedClass = obj.completed ? 'text-decor' : 'no-lines';

  let element = `
              <div class="position-check">
                <label class="container">
                  <input class="checkbox" name='task' type="checkbox" ${checkboxState} />
                  <label for='task'></label>
                </label>
              </div>
              <div class="titles">      
                <p class=${addingDashedClass} >${obj.title}</p>
                <p><u class=${obj.priority}>${obj.priority}-priority </u></p>
              </div>
              <div class="date">
                <p>due date</p>
                <p >${obj.date}</p>
              </div>
              <div class="task-btn">
              <button class="btn">view task</button>
                <button class="btn">delete</button>
              </div>`;
  return element;
}

function formCutter() {
  const form = document.createElement('div');
  form.classList.add('taskInfo');
  form.innerHTML = `    
    <form action="" id="form">
      <label for="title">Title: </label>
      <input type="text" name="title" id="taskTitle" />

      <label for="description">Description: </label>
      <input type="text" name="description" id="taskDescription" />

      <label for="dueDate">Due date: </label>
      <input type="date" name="dueDate" id="taskDate" />

      <label for="priority">Priority: </label>
      <select name="priority" id="taskPriority">
        <option value="low">low priority</option>
        <option value="medium">medium priority</option>
        <option value="high">high priority</option>
      </select>

      <label for="choose project">Project: </label>
      <select name="choose project" id="chooseProject"></select>

      <button class="submit">submit</button>
      <button class="cancel">cancel</button>
    </form>`;
  return form;
  options();
}

function options() {
  const projectNamesOptions = form.querySelector('#chooseProject');

  for (const key in projectArray) {
    const options = document.createElement('option');
    options.value = key;
    options.textContent = key;
    projectNamesOptions.appendChild(options);
  }
}

export { buttonCutter, taskCutter, formCutter, options };
