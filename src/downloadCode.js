export { downloadCode };

let str1 = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Page View</title> 
    <style>
      .resizable{
        width: 100%;
        position: absolute;
        /* resize: both;
        overflow: auto; */
      }
      .border{
        border: none;
      }
      .dragIcon{
        display: none;
      }
    </style>
    <link href="https://kiranadh1452.github.io/Web-Page-Builder/assets/output/reset.css" rel="stylesheet">
    <link rel="stylesheet" href="https://kiranadh1452.github.io/Web-Page-Builder/assets/output/index.css" />
</head>
<body>
` ;

let str2 = `
<script src="https://kiranadh1452.github.io/Web-Page-Builder/assets/output/Carousel.js"></script>
</body>
</html>`;


//export the html code in file format
function downloadCode(){
  let strMid = document.querySelector('#output-container').innerHTML;
  let myPage = str1 + strMid + str2;

  const textToBLOB = new Blob([myPage], { type: 'text/plain' });
  const sFileName = 'myPage.html';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }

  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  
  newLink.click();

}
