import { removeArrayElement, updateSelectedElement} from './utils.js' ;
import { totalElements } from './elementList.js';
import { editElement } from './editElement.js';
import { DragIcon } from './DragIcon.js';

export { addElementToPage, selectedElementHandler, editElement, onDragStart, onDragOver, dragStartHandler};

const page = document.querySelector('#output-container');
let mousePosX, mousePosY;
let draggedItem;


// adding elements on left side bars to the page view
function addElementToPage(event){
  // trackMouse();
  const newElem = document.createElement(`${event.target.innerHTML}`);
  newElem.innerHTML = `Created Element : ${event.target.innerHTML}\n`;
  newElem.classList.add('border');
  newElem.classList.add('resizable');
  newElem.draggable = true;
  totalElements.push(newElem);
  page.appendChild(newElem);
  updateSelectedElement(newElem);

  newElem.addEventListener('click', selectedElementHandler);
  newElem.addEventListener('contextmenu', editElement);

  page.addEventListener("dragstart", onDragStart, false);

  page.addEventListener('dragover', onDragOver, false);

  page.addEventListener('drop', dragStartHandler, false);

}

//on dragstart
function onDragStart( event ){
  draggedItem = event.target;
  draggedItem.leftShift = event.pageX - page.offsetLeft - draggedItem.offsetLeft;
  draggedItem.topShift = event.pageY - page.offsetTop - draggedItem.offsetTop;
}

//on drag over
function onDragOver(event) {
  event.preventDefault();
}

//on dragover
function dragStartHandler(event){
  event.preventDefault();
  const currElement = event.target;
  let posX = event.pageX - page.offsetLeft - draggedItem.leftShift;
  let posY = event.pageY - page.offsetTop - draggedItem.topShift;
  if(posX < 0){
    posX = 0;
  }
  if(posY < 0) posY = 0;

  draggedItem.style.top = `${posY}px`;
  draggedItem.style.left = `${posX}px`;

  let sizeAdjust =  (posX + draggedItem.offsetWidth) - page.offsetWidth;
  if(sizeAdjust > 0){
    console.log(draggedItem.offsetWidth - sizeAdjust);
    draggedItem.style.width = draggedItem.offsetWidth - sizeAdjust +"px";
  }
}

//on clicking the element
function selectedElementHandler(event){
  const currElement = event.target;
  updateSelectedElement(currElement);
  document.addEventListener('keydown', selectedElementKeyHandler);
}

//on pressing the delete button from keyboard
function selectedElementKeyHandler(event){
  const code = event.code;
  if(code === "Delete"){
    const selectedList = document.querySelectorAll('.selected-element');
    if(selectedList != null){
      selectedList.forEach(prevElement => {    
        removeArrayElement(totalElements,prevElement);
        prevElement.remove();
      });
    }
  }
}

