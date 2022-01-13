import { chooseTheme } from './themeHandler.js'
import { downloadCode } from './downloadCode.js';
import { displayElement, totalElements} from './elementList.js';


const clearPage = document.querySelector('#clear-page');
const exportCode = document.querySelector('#code-export');

//On clicking the clear page button
clearPage.onclick = () => {
  document.querySelector('#output-container').innerHTML = '';
  for(let items of totalElements){
    removeArrayElement(totalElements, items);
  }
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
