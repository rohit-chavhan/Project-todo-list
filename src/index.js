import navbarHtml from './html/navbar.html';
import projectHtml from './html/projects.html';
import taskHtml from './html/tasks.html';

import './css/styles.css';
import './css/nav.css';
import './css/projects.css';
import './css/checkbox.css';

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

// UI should have access to a method it needs to use in order to play a round. This method should be simple to call and as restrictive as possible (meaning, it should not need to provide a multitude of arguments to do something). Conversely, the DOM probably doesn't need access to a way of changing which player's turn it is. Instead, it should be able to read whose turn it is as it changes after every round. This is an important distinction, and one I hope to further illustrate later.
