import navbarHtml from './html/navbar.html';
import projectHtml from './html/projects.html';
import taskHtml from './html/tasks.html';

import './css/styles.css';

import { addProjectFunc } from './js/console';

document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.querySelector('.navbar');
  const mainProjects = document.querySelector('.projects');
  const mainTask = document.querySelector('.tasks');

  navBar.innerHTML = navbarHtml;
  mainProjects.innerHTML = projectHtml;
  mainTask.innerHTML = taskHtml;

  addProjectFunc();
});
