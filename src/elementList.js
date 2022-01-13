import {addElementToPage} from './eventHandlers.js';

let totalElements = [];

const elemList = {
  'Block Element' : 'div',
  'Sub-title' : 'p',
  'Title' : 'span',
  'Button' : 'button',
  'Image' : 'img',
  'List Title' : 'ul',
  'List item' : 'li', 
  'Table' : 'table',
  'Form Input':'input', 
  'Image Carousel':'Image Carousel'
};
const advanceElemList = ['Image Carousel'];

//displaying the elements in the left side-bar
function displayElement(){
  const list = document.querySelector('#element-list');
  
  for(let item in elemList){
    let myEl = document.createElement('li');

    myEl.innerHTML = item;
    myEl.draggable = true;    
    myEl.classList.add('element-list-item');
    myEl.addEventListener('click', addElementToPage);
    
    list.appendChild(myEl);
  }
  
}

export { displayElement, totalElements, elemList };
