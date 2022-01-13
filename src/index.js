import { displayElement } from './elementList.js';
import { downloadCode } from './downloadCode.js';
import { chooseTheme } from './themeHandler.js'


const instructionsBtn = document.querySelector('#instruction-btn');
const clearPage = document.querySelector('#clear-page');
const exportCode = document.querySelector('#code-export');

//On clicking the clear page button
clearPage.onclick = () => {
  document.querySelector('#output-container').innerHTML = '';
  totalElements = [];
}

//tes button - for display purpose
instructionsBtn.onclick = () => {
  const allValues = document.querySelectorAll('.resizable');
  allValues.forEach( value => {
    console.log(value);
  });
}

// export code button
exportCode.onclick = () => {
  downloadCode();
}

//show elements in the left side bar
displayElement();

//theme selection
const themeList = {
  'theme1' : '../assets/themes/theme1.html',
  'theme2' : ''
}

// chooseTheme(themeList.theme1);
