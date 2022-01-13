import { updateSelectedElement } from './utils.js';
import { tableArray } from './eventHandlers.js';

let beingEdited = false;
const pageWrap = document.querySelector('#edit-view');

//on double clicking the element 
function editElement(event) {

  if (beingEdited) {
    return;
  }

  event.preventDefault();
  const currElement = event.target;
  updateSelectedElement(currElement);

  const formElement = document.createElement('form');

  formElement.classList.add('edit-form');

  //contents inside the form
  
  //font-size 
  const fontField = document.createElement('div');
  const fontFieldTitle = document.createElement('p');
  const fontFieldValue = document.createElement('input');
  
  fontFieldTitle.innerHTML = `Font Size `;
  fontFieldValue.value = currElement.style.fontSize ;
  
  fontField.appendChild(fontFieldTitle);
  fontField.appendChild(fontFieldValue);
  
  
  //background Image
  const bgImageField = document.createElement('div');
  const bgImageFieldTitle = document.createElement('p');
  const bgImageFieldValue = document.createElement('input');
  
  bgImageFieldTitle.innerHTML = `URL of background image (leave empty for no bg image)`;
  bgImageFieldValue.value = currElement.style.backgroundImage;
  if(bgImageFieldValue.value.indexOf("url(")>-1){
    bgImageFieldValue.value =bgImageFieldValue.value.slice(5,-2); //slice the `url(` part
  }
  
  bgImageField.appendChild(bgImageFieldTitle);
  bgImageField.appendChild(bgImageFieldValue);
  
  //item width and height
  
  //width
  const widthField = document.createElement('div');
  const widthFieldTitle = document.createElement('p');
  const widthFieldValue = document.createElement('input');
  
  widthFieldValue.value = currElement.style.width ;
  widthFieldTitle.innerHTML = `Width of this element `;
  
  widthField.appendChild(widthFieldTitle);
  widthField.appendChild(widthFieldValue);
  
  //height
  const heightField = document.createElement('div');
  const heightFieldTitle = document.createElement('p');
  const heightFieldValue = document.createElement('input');
  
  heightFieldValue.value = currElement.style.height ;
  heightFieldTitle.innerHTML = `Height of this element `;
  
  heightField.appendChild(heightFieldTitle);
  heightField.appendChild(heightFieldValue);
  
  //bg-color editor
  const colorField = document.createElement('div');
  const colorFieldTitle = document.createElement('p');
  const colorFieldValue = document.createElement('input');

  colorFieldValue.setAttribute('type', 'color');
  
  colorFieldValue.value = '#ffffff';
  colorFieldTitle.innerHTML = `Background Color `;
  
  colorField.appendChild(colorFieldTitle);
  colorField.appendChild(colorFieldValue);
  
  //text-color editor
  const textColorField = document.createElement('div');
  const textColorFieldTitle = document.createElement('p');
  const textColorFieldValue = document.createElement('input');
  
  textColorFieldValue.setAttribute('type', 'color');
  
  textColorFieldTitle.innerHTML = `Text Color `;
  textColorFieldValue.value = currElement.clientColor;
  
  textColorField.appendChild(textColorFieldTitle);
  textColorField.appendChild(textColorFieldValue);
  
  //content of the element
  const formSubmit = document.createElement('button');
  const textElement = document.createElement('textarea');
  
  formSubmit.innerText = " Update ";
  textElement.value = currElement.innerHTML;

  //add row and column for table view
  //experimental, not implemented yet
  if(currElement.type = 'table'){
    console.log(currElement)

    for(let tableEach of tableArray){
      console.log(tableEach);

      if(tableEach == currElement){
        console.log('Found')
        const addRowBtn = document.createElement('button');
        addRowBtn.innerText = `Add Row`;
        // addRowBtn.onclick = currElement.object.addRow();

        const addColBtn = document.createElement('button');
        addColBtn.innerText = `Add Column`;    

        formElement.appendChild(addRowBtn);
        formElement.appendChild(addColBtn);
      }

    }

  }
  
  //appending the sub-components inside the form
  formElement.appendChild(textElement);
  formElement.appendChild(colorField);
  formElement.appendChild(textColorField);
  
  formElement.appendChild(fontField);
  formElement.appendChild(widthField);
  formElement.appendChild(heightField);
  formElement.appendChild(bgImageField);
  
  formElement.appendChild(formSubmit);

  //form submit button
  formSubmit.onclick = () => {

    //change the content of the editing element
    currElement.innerHTML = textElement.value;
    
    //change color
    
    currElement.style.color = textColorFieldValue.value;
    
    //change font-szie, height and width
    currElement.style.width = `${parseInt(widthFieldValue.value)}px`;
    currElement.style.fontSize = `${parseInt(fontFieldValue.value)}px`;
    currElement.style.height = `${parseInt(heightFieldValue.value)}px`;
    
    //changing background image
    if(bgImageFieldValue.value != undefined && bgImageFieldValue.value != '' && bgImageFieldValue.value !='none'){
      if(bgImageFieldValue.value.indexOf("url('")<0){
        bgImageFieldValue.value = "url('" +bgImageFieldValue.value+  "')";
      }
      currElement.style.background = bgImageFieldValue.value;
      currElement.style.backgroundSize = "100% 100%";
    }
    else{
      currElement.style.background = "none";
      currElement.style.backgroundColor = colorFieldValue.value;
    }

    //deleting the form element after making changes.
    beingEdited = false;
    formElement.remove();
  };
  
  //form styling
  formElement.style.zIndex = '3';
  formElement.style.position = 'absolute';
  
  formElement.style.top = 10 + "px";
  formElement.style.left = 20 + "px";
  formElement.style.width = pageWrap.clientWidth/1.2 + 'px';

  pageWrap.appendChild(formElement);
  beingEdited = true;
}


export { editElement } ;
