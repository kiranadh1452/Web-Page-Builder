import {addElementToPage} from './eventHandlers.js';
import { Carousel } from './Carousel.js';
export { displayElement, totalElements };

let totalElements = [];
const elemList = ['div','p','span','button','img','ul','li', 'table','input'];
const advanceElemList = ['Image Carousel' , 'Testinomials', 'Contact', 'Gallery' , 'F.A.Q', 'Promo', 'Portfolio' ];

//displaying the elements in the left side-bar
function displayElement(){
  const list = document.querySelector('#element-list');
  for(let item of elemList){
    let myEl = document.createElement('li');
    myEl.classList.add('element-list-item');
    myEl.innerHTML = item;
    myEl.draggable = true;
    myEl.addEventListener('click', addElementToPage);
    list.appendChild(myEl);
  }
  
  //for image carousel
  {
    let carouselWrapper = document.createElement('div');
    carouselWrapper.setAttribute('id', 'wrapper');
    let carouselImages = document.createElement('div');
    carouselImages.setAttribute('id', 'images')
    for(let i = 0; i<4 ; i++){
      let image = document.createElement('img');
      image.src = 'https://kiranadh1452.github.io/repo_assignment/JS/Assignment2/assets/images/image1.jpg';
      carouselImages.appendChild(image);
    }
    carouselWrapper.appendChild(carouselImages);
    document.querySelector('#output-container').appendChild(carouselWrapper);

    let properties1 = {               // object to initialize the class
      imgWrapperId : "wrapper",     // id of the wrapper
      imgContainer : "images",      // id of the image container
      imageWidth : 500,              // width of image
      requiredTime : 5,              // animation time in seconds
      delay: 5                       // amount of delay
    };
    let c1 = new Carousel(properties1);

  }

}

