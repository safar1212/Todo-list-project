/* eslint-disable no-unused-vars */

import _ from 'lodash';

import './style.css';

const listOfObjects = [
  {
    description: 'Complete tasks',
    completed: false,
    index: 0,
  },
  {
    description: 'Check for linters',
    completed: false,
    index: 1,
  },
  {
    description: 'Take a rest',
    completed: false,
    index: 2,
  },
];

const listDiv = document.querySelector('#list');

window.addEventListener('load', () => {
  for (let i = 0; i < listOfObjects.length; i += 1) {
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'items');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.id = 'id';
    checkbox.value = 'value';

    const label = document.createElement('label');
    label.htmlFor = 'id';
    label.appendChild(document.createTextNode(listOfObjects[i].description));

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    listDiv.appendChild(listItem);
  }
});
