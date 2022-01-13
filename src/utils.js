import { DragIcon } from './DragIcon.js';

//function to remove a element from array with value value
function removeArrayElement( myArray, value){
  myArray =  myArray.filter(function(item){ 
    return item != value; 
  });
}

//function to show which is the current selected element
function updateSelectedElement(nextSelected){
  const selectedList = document.querySelectorAll('.selected-element');
  if(selectedList != null){
    selectedList.forEach(prevElement => {    
      prevElement.classList.remove('selected-element');
      // prevElement.dragBtn.delete(); // drag icon - red color icon
    });
  }
  nextSelected.classList.add('selected-element');
  // nextSelected.dragBtn = new DragIcon(nextSelected); //for drag icon
}


export { removeArrayElement , updateSelectedElement };