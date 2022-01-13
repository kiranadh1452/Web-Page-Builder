import { addElementToPage, selectedElementHandler, editElement, onDragStart, onDragOver, dragStartHandler} from './eventHandlers.js' ;

export { chooseTheme };

function chooseTheme(themeId){
  return fetch(themeId)
  .then( function(response){
    return (response.text());
  })
  .then( function(data){
    loadTheme(data);
  });
}

const containerOp = document.getElementById('output-container');
function loadTheme(themeVal){
  const themeContainer = document.createElement('div');
  themeContainer.innerHTML = themeVal;
  // containerOp.innerHTML = themeVal;

  for(let item of themeContainer.children) {
    addItemToContainer(item);
    containerOp.appendChild(item);
  }
}

function addItemToContainer(item){
  if(item.children.length == 0){
    console.log(item);
    item.contentEditable = true;
    item.classList.add('border');
    item.classList.add('resizable');
    item.draggable = true;

    // item.addEventListener('click', selectedElementHandler);
    item.addEventListener('contextmenu', editElement);
  }
  else{
    for(let itemChild of item.children){
      addItemToContainer(itemChild);
    }
  }
}