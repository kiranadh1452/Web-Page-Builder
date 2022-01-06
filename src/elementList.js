import {addElementToPage, testForThemes} from './eventHandlers.js';
export { displayElement, totalElements };

let totalElements = [];
const elemList = ['div','p','span','button','img','ul','li', 'table','input', 'audio'];

//displaying these elements in the left side-bar
function displayElement(){
  const list = document.querySelector('#element-list');
  for(let item of elemList){
    let myEl = document.createElement('li');
    myEl.classList.add('element-list-item');
    myEl.innerHTML = item;
    myEl.draggable = true;
    myEl.addEventListener('click', addElementToPage)
    list.appendChild(myEl);
  }

  // testForThemes();
}

