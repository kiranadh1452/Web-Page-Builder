import { DragIcon } from './DragIcon.js';

/*
  Remove an element from array with a value
  @param {Array} myArray
  @param {Node} value
*/
function removeArrayElement( myArray, value){
  myArray =  myArray.filter(function(item){ 
    return item != value; 
  });
}

/* 
  Shows which is the current selected element
  @param {Node} nextSelected
*/
function updateSelectedElement(nextSelected){
  const selectedList = document.querySelectorAll('.selected-element');
  if(selectedList != null){
    selectedList.forEach(prevElement => {    
      prevElement.classList.remove('selected-element');
      // prevElement.dragBtn.delete(); // remove drag icon - red color icon
    });
  }
  nextSelected.classList.add('selected-element');
  // nextSelected.dragBtn = new DragIcon(nextSelected); //for adding drag icon
}


export { removeArrayElement , updateSelectedElement };