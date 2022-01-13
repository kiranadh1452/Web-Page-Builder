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
    </style>
    <link rel="stylesheet" href="https://kiranadh1452.github.io/repo_assignment/JS/Assignment2/index.css" />
</head>
<body>
` ;

let str2 = `
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