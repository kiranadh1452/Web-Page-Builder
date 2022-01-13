// import { DragIcon } from './DragIcon.js';
import { Table } from './Table.js';
import { Carousel } from './Carousel.js';
import { editElement} from './editElement.js';
import { totalElements, elemList } from './elementList.js';
import { removeArrayElement, updateSelectedElement} from './utils.js' ;

let draggedItem;
let tableArray = [];
let mousePosX, mousePosY;
const page = document.querySelector('#output-container');


// adding elements on left side bars to the page view
function addElementToPage(event){
  const targetValue = elemList[event.target.innerHTML];

  let newElem;

  if(targetValue == 'Image Carousel'){
    newElem = addCarouselToPage();
    handleElement(newElem, '' , event);
    return;
  }

  else if(targetValue == 'table'){
    let table = new Table();
    let myTable = table.table;
    handleElement(myTable, '', event);
    tableArray.push(table);
  }
  
  else{
    console.log(targetValue)
    newElem = document.createElement(`${targetValue}`);
    console.log(newElem);
    handleElement(newElem, targetValue, event);
  }

}

/*
  Function to add other event listners to a new created element
  @param {newElem} Node - created element
  @param {targetValue} String - type of element created
  @param {event} Event - passes on the clicked event
*/
function handleElement(newElem, targetValue, event){
  newElem.draggable = true;
  newElem.classList.add('border');
  newElem.classList.add('resizable');

  if(targetValue != ''){
    newElem.innerHTML = `${event.target.innerHTML}\n ---`;
  }

  page.appendChild(newElem);
  totalElements.push(newElem);
  updateSelectedElement(newElem);

  newElem.addEventListener('click', selectedElementHandler);

  newElem.addEventListener('contextmenu', editElement);

  page.addEventListener("dragstart", onDragStart, false);
  
  page.addEventListener('dragover', onDragOver, false);
  page.addEventListener('drop', onDrop, false);
}

//adding image carousel element
//not completed yet
//returns the wrapper containing carousel
function addCarouselToPage(){
  const carouselWrapper = document.createElement('div');
  carouselWrapper.setAttribute('id', 'wrapper');

  const carouselImages = document.createElement('div');
  carouselImages.setAttribute('id', 'images')
  
  for(let i = 0; i<4 ; i++){
    let image = document.createElement('img');
    image.src = `https://kiranadh1452.github.io/repo_assignment/JS/Assignment2/assets/images/image${i+1}.jpg`;

    carouselImages.appendChild(image);
  }

  carouselWrapper.appendChild(carouselImages);

  page.appendChild(carouselWrapper);

  let properties1 = {               // object to initialize the class
    imgWrapperId : "wrapper",     // id of the wrapper
    imgContainer : "images",      // id of the image container
    imageWidth : 500,              // width of image
    requiredTime : 5,              // animation time in seconds
    delay: 5                       // amount of delay
  };

  new Carousel(properties1);
  return carouselWrapper;
  
}

//on dragstart
function onDragStart( event ){
  draggedItem = event.target;
  updateSelectedElement(draggedItem);
  draggedItem.topShift = event.pageY - page.offsetTop - draggedItem.offsetTop;
  draggedItem.leftShift = event.pageX - page.offsetLeft - draggedItem.offsetLeft;
}

//on drag over
function onDragOver(event){
  event.preventDefault();
}

//on dragover
function onDrop(event){
  event.preventDefault();
  const currElement = event.target;
  let posY = event.pageY - page.offsetTop - draggedItem.topShift;
  let posX = event.pageX - page.offsetLeft - draggedItem.leftShift;
  
  if(posX < 0){
    posX = 0;
  }
  
  if(posY < 0){
    posY = 0; 
  }
  
  draggedItem.style.top = `${posY}px`;
  draggedItem.style.left = `${posX}px`;
  
  let sizeAdjust =  (posX + draggedItem.offsetWidth) - page.offsetWidth;
  
  if(sizeAdjust > 0){
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

export { addElementToPage, selectedElementHandler, editElement, onDragStart, onDragOver, onDrop, tableArray};
