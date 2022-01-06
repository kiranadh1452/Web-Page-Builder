import { updateSelectedElement } from './utils.js';

export { editElement } ;

const pageWrap = document.querySelector('#edit-view');
let beingEdited = false;

//on double clicking the element 
function editElement(event) {
  if (beingEdited) {
    return;
  }
  const currElement = event.target;
  event.preventDefault();
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
  
  
//item width and height

  //background Image
  const bgImageField = document.createElement('div');
  const bgImageFieldTitle = document.createElement('p');
  const bgImageFieldValue = document.createElement('input');

  bgImageFieldTitle.innerHTML = `URL of background image (leave empty for no bg image)`;
  bgImageFieldValue.value = currElement.style.backgroundImage;

  bgImageField.appendChild(bgImageFieldTitle);
  bgImageField.appendChild(bgImageFieldValue);

  //width
  const widthField = document.createElement('div');
  const widthFieldTitle = document.createElement('p');
  const widthFieldValue = document.createElement('input');

  widthFieldTitle.innerHTML = `Width of this element `;
  widthFieldValue.value = currElement.style.width ;

  widthField.appendChild(widthFieldTitle);
  widthField.appendChild(widthFieldValue);
  
  //height
  const heightField = document.createElement('div');
  const heightFieldTitle = document.createElement('p');
  const heightFieldValue = document.createElement('input');

  heightFieldTitle.innerHTML = `Height of this element `;
  heightFieldValue.value = currElement.style.height ;

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
  const textElement = document.createElement('textarea');
  const formSubmit = document.createElement('button');

  textElement.value = currElement.innerHTML;

  formSubmit.innerText = " Update ";

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
    currElement.style.fontSize = `${parseInt(fontFieldValue.value)}px`;
    currElement.style.width = `${parseInt(widthFieldValue.value)}px`;
    currElement.style.height = `${parseInt(heightFieldValue.value)}px`;

    //changing background image
    if(bgImageFieldValue.value != undefined && bgImageFieldValue.value != ''){
      currElement.style.background = bgImageFieldValue.value;
      currElement.style.backgroundSize = "100% 100%";
    }
    else{
      currElement.style.background = "none";
      currElement.style.backgroundColor = colorFieldValue.value;
    }
    //deleting the form element after making changes.
    pageWrap.removeChild(formElement);
    formElement.remove();
    beingEdited = false;
  };

  //form styling
  formElement.style.position = 'absolute';
  formElement.style.zIndex = '3';

  formElement.style.width = pageWrap.clientWidth/1.2 + 'px';
  formElement.style.top = 10 + "px";
  formElement.style.left = 20 + "px";


  pageWrap.appendChild(formElement);
  beingEdited = true;

}
