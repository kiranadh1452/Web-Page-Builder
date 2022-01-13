import {addElementToPage} from './eventHandlers.js';

let totalElements = [];
const elemList = ['div','p','span','button','img','ul','li', 'table','input', 'Image Carousel'];
const advanceElemList = ['Image Carousel'];

//displaying the elements in the left side-bar
function displayElement(){
  const list = document.querySelector('#element-list');
  for(let item of elemList){
    let myEl = document.createElement('li');

    myEl.innerHTML = item;
    myEl.draggable = true;    
    myEl.classList.add('element-list-item');
    myEl.addEventListener('click', addElementToPage);
    
    list.appendChild(myEl);
  }
  
}

export { displayElement, totalElements };
