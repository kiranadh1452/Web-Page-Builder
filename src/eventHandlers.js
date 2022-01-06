import { removeArrayElement, updateSelectedElement} from './utils.js' ;
import { totalElements } from './elementList.js';
import { editElement } from './editElement.js';
import { DragIcon } from './DragIcon.js';

export { addElementToPage , testForThemes};

const page = document.querySelector('#output-container');
let mousePosX, mousePosY;
let draggedItem;


// adding elements on left side bars to the page view
function addElementToPage(event){
  // trackMouse();
  const newElem = document.createElement(`${event.target.innerHTML}`);
  newElem.innerHTML = `Created Element : ${event.target.innerHTML}\n`;
  newElem.classList.add('border');
  newElem.classList.add('resizable');
  newElem.draggable = true;
  totalElements.push(newElem);
  page.appendChild(newElem);
  updateSelectedElement(newElem);
  newElem.addEventListener('click', selectedElementHandler);
  newElem.addEventListener('contextmenu', editElement);

  document.addEventListener("dragstart", function( event ) {
    draggedItem = event.target;
    draggedItem.leftShift = event.pageX - page.offsetLeft - draggedItem.offsetLeft;
    draggedItem.topShift = event.pageY - page.offsetTop - draggedItem.offsetTop;
  }, false);

  page.addEventListener('dragover', function(event) {
    event.preventDefault();
  }, false);

  page.addEventListener('drop', dragStartHandler, false);

}

//on dragover
function dragStartHandler(event){
  event.preventDefault();
  const currElement = event.target;
  let posX = event.pageX - page.offsetLeft - draggedItem.leftShift;
  let posY = event.pageY - page.offsetTop - draggedItem.topShift;
  if(posX < 0){
    posX = 0;
  }
  if(posY < 0) posY = 0;

  draggedItem.style.top = `${posY}px`;
  draggedItem.style.left = `${posX}px`;

  let sizeAdjust =  (posX + draggedItem.offsetWidth) - page.offsetWidth;
  if(sizeAdjust > 0){
    console.log(draggedItem.offsetWidth - sizeAdjust);
    draggedItem.style.width = draggedItem.offsetWidth - sizeAdjust +"px";
  }
}

//on clicking the element
function selectedElementHandler(event){
  const currElement = event.target;
  updateSelectedElement(currElement);
  document.addEventListener('keydown', selectedElementKeyHandler);
}

//on pressing the delete button from keyboard
function selectedElementKeyHandler(event){
  const code = event.code;
  if(code === "Delete"){
    const selectedList = document.querySelectorAll('.selected-element');
    if(selectedList != null){
      selectedList.forEach(prevElement => {    
        removeArrayElement(totalElements,prevElement);
        prevElement.remove();
      });
    }
  }
}



//below section is a test section for templates addition and nothing else.
//testing for a theme.
// let mystrVal;
function testForThemes(){}
//   const containerOp = document.getElementById('output-container')
//   containerOp.innerHTML = mystrVal;

//   for(let item of containerOp.children) {
//     item.addEventListener('click', selectedElementHandler);
//     item.addEventListener('contextmenu', editElement);
//   }
// }

// mystrVal = `

// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <!-- Navbar -->
// <div class="">
//   <div class="w3-bar w3-black w3-card">
//     <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
//     <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
//     <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
//     <a href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
//     <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
//     <div class="w3-dropdown-hover w3-hide-small">
//       <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
//       <div class="w3-dropdown-content w3-bar-block w3-card-4">
//         <a href="#" class="w3-bar-item w3-button">Merchandise</a>
//         <a href="#" class="w3-bar-item w3-button">Extras</a>
//         <a href="#" class="w3-bar-item w3-button">Media</a>
//       </div>
//     </div>
//     <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
//   </div>
// </div>

// <!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
// <div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">
//   <a href="#band" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">BAND</a>
//   <a href="#tour" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">TOUR</a>
//   <a href="#contact" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">CONTACT</a>
//   <a href="#" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">MERCH</a>
// </div>

// <!-- Page content -->
// <div class="w3-content" style="max-width:2000px;margin-top:46px">

//   <!-- The Band Section -->
//   <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px" id="band">
//     <h2 class="w3-wide">THE BAND</h2>
//     <p class="w3-opacity"><i>We love music</i></p>
//     <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
//       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
//       adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//     <div class="w3-row w3-padding-32">
//       <div class="w3-third">
//         <p>Name</p>
//         <img src="https://www.w3schools.com/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
//       </div>
//       <div class="w3-third">
//         <p>Name</p>
//         <img src="https://www.w3schools.com/w3images/bandmember.jpg" class="w3-round w3-margin-bottom" alt="Random Name" style="width:60%">
//       </div>
//       <div class="w3-third">
//         <p>Name</p>
//         <img src="https://www.w3schools.com/w3images/bandmember.jpg" class="w3-round" alt="Random Name" style="width:60%">
//       </div>
//     </div>
//   </div>

//   <!-- The Tour Section -->
//   <div class="w3-black" id="tour">
//     <div class="w3-container w3-content w3-padding-64" style="max-width:800px">
//       <h2 class="w3-wide w3-center">TOUR DATES</h2>
//       <p class="w3-opacity w3-center"><i>Remember to book your tickets!</i></p><br>

//       <ul class="w3-ul w3-border w3-white w3-text-grey">
//         <li class="w3-padding">September <span class="w3-tag w3-red w3-margin-left">Sold out</span></li>
//         <li class="w3-padding">October <span class="w3-tag w3-red w3-margin-left">Sold out</span></li>
//         <li class="w3-padding">November <span class="w3-badge w3-right w3-margin-right">3</span></li>
//       </ul>

//       <div class="w3-row-padding w3-padding-32" style="margin:0 -16px">
//         <div class="w3-third w3-margin-bottom">
//           <img src="https://www.w3schools.com/w3images/newyork.jpg" alt="New York" style="width:100%" class="w3-hover-opacity">
//           <div class="w3-container w3-white">
//             <p><b>New York</b></p>
//             <p class="w3-opacity">Fri 27 Nov 2016</p>
//             <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//             <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
//           </div>
//         </div>
//         <div class="w3-third w3-margin-bottom">
//           <img src="https://www.w3schools.com/w3images/paris.jpg" alt="Paris" style="width:100%" class="w3-hover-opacity">
//           <div class="w3-container w3-white">
//             <p><b>Paris</b></p>
//             <p class="w3-opacity">Sat 28 Nov 2016</p>
//             <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//             <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
//           </div>
//         </div>
//         <div class="w3-third w3-margin-bottom">
//           <img src="https://www.w3schools.com/w3images/sanfran.jpg" alt="San Francisco" style="width:100%" class="w3-hover-opacity">
//           <div class="w3-container w3-white">
//             <p><b>San Francisco</b></p>
//             <p class="w3-opacity">Sun 29 Nov 2016</p>
//             <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//             <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <!-- Ticket Modal -->
//   <div id="ticketModal" class="w3-modal">
//     <div class="w3-modal-content w3-animate-top w3-card-4">
//       <header class="w3-container w3-teal w3-center w3-padding-32"> 
//         <span onclick="document.getElementById('ticketModal').style.display='none'" 
//        class="w3-button w3-teal w3-xlarge w3-display-topright">&times;</span>
//         <h2 class="w3-wide"><i class="fa fa-suitcase w3-margin-right"></i>Tickets</h2>
//       </header>
//       <div class="w3-container">
//         <p><label><i class="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
//         <input class="w3-input w3-border" type="text" placeholder="How many?">
//         <p><label><i class="fa fa-user"></i> Send To</label></p>
//         <input class="w3-input w3-border" type="text" placeholder="Enter email">
//         <button class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i class="fa fa-check"></i></button>
//         <button class="w3-button w3-red w3-section" onclick="document.getElementById('ticketModal').style.display='none'">Close <i class="fa fa-remove"></i></button>
//         <p class="w3-right">Need <a href="#" class="w3-text-blue">help?</a></p>
//       </div>
//     </div>
//   </div>

//   <!-- The Contact Section -->
//   <div class="w3-container w3-content w3-padding-64" style="max-width:800px" id="contact">
//     <h2 class="w3-wide w3-center">CONTACT</h2>
//     <p class="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
//     <div class="w3-row w3-padding-32">
//       <div class="w3-col m6 w3-large w3-margin-bottom">
//         <i class="fa fa-map-marker" style="width:30px"></i> Chicago, US<br>
//         <i class="fa fa-phone" style="width:30px"></i> Phone: +00 151515<br>
//         <i class="fa fa-envelope" style="width:30px"> </i> Email: mail@mail.com<br>
//       </div>
//       <div class="w3-col m6">
//         <form action="/action_page.php" target="_blank">
//           <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
//             <div class="w3-half">
//               <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
//             </div>
//             <div class="w3-half">
//               <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
//             </div>
//           </div>
//           <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
//           <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
//         </form>
//       </div>
//     </div>
//   </div>
  
// <!-- End Page Content -->
// </div>

// <!-- Image of location/map -->
// <img src="https://www.w3schools.com/w3images/map.jpg" class="w3-image w3-greyscale-min" style="width:100%">

// <!-- Footer -->
// <footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
//   <i class="fa fa-facebook-official w3-hover-opacity"></i>
//   <i class="fa fa-instagram w3-hover-opacity"></i>
//   <i class="fa fa-snapchat w3-hover-opacity"></i>
//   <i class="fa fa-pinterest-p w3-hover-opacity"></i>
//   <i class="fa fa-twitter w3-hover-opacity"></i>
//   <i class="fa fa-linkedin w3-hover-opacity"></i>
//   <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
// </footer>

// `;