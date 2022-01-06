import { displayElement } from './elementList.js';
import { downloadCode } from './downloadCode.js';


const testBtn = document.querySelector('#test-btn');
const clearPage = document.querySelector('#clear-page');
const exportCode = document.querySelector('#code-export');

clearPage.onclick = () => {
  document.querySelector('#output-container').innerHTML = '';
  totalElements = [];
}

testBtn.onclick = () => {
  const allValues = document.querySelectorAll('.resizable');
  allValues.forEach( value => {
    console.log(value);
  });
}

exportCode.onclick = () => {
  downloadCode();
}
displayElement();
