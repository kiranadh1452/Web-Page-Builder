import { selectedElementHandler, editElement} from './eventHandlers.js' ;

//chooses a particular one among available themes
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

//loads a particular theme
function loadTheme(themeVal){
  containerOp.innerHTML = themeVal;
  for(let item of containerOp.children) {
    addToContainer(item);
  }
}

function addToContainer(item){
  
  if(item.children.length == 0){
    const page = document.getElementById('output-container');
    item.contentEditable = true;
    item.addEventListener('contextmenu', editElement);
    item.addEventListener('click',selectedElementHandler);
  }

  else{
    for(let itemChild of item.children){
      addToContainer(itemChild);
    }
  }
  
}

export { chooseTheme };
