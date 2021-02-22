
'use strict';

let leftImageElement = document.getElementById('left');
let centerImageElement = document.getElementById('center')
let rightImageElement = document.getElementById('right');
let maxAttempts = 5;
let userAttemptsCounter=0;
let leftImageIndex ;
let centerImageIndex;
let rightImageIndex;


function generateRandomIndex () {
  return (Math.floor(Math.random() * Image.all.length));
}


let Image = function(imgName,source) {   
  this.imgName = imgName;
  this.source = source;
  this.votes = 0;
  //this.displayedImage = 0;
  Image.all.push(this);
};
Image.all = [];
new Image('bag', 'img/bag.jpg');
new Image('banana', 'img/banana.jpg');
new Image('bathroom', 'img/bathroom.jpg');
new Image('boots', 'img/boots.jpg');
new Image('breakfast', 'img/breakfast.jpg');
new Image('bubblegum', 'img/bubblegum.jpg');
new Image('chair', 'img/chair.jpg');
new Image('cthulhu', 'img/cthulhu.jpg');
new Image('dog-duck', 'img/dog-duck.jpg');
new Image('dragon', 'img/dragon.jpg');
new Image('pen', 'img/pen.jpg');
new Image('pet-sweep', 'img/pet-sweep.jpg');
new Image('scissors', 'img/scissors.jpg');
new Image('shark', 'img/shark.jpg');
new Image('sweep', 'img/sweep.png');
new Image('tauntaun', 'img/tauntaun.jpg');
new Image('unicorn', 'img/unicorn.jpg');
new Image('usb', 'img/usb.gif');
new Image('water-can', 'img/water-can.jpg');
new Image('wine-glass', 'img/wine-glass.jpg');



function renderThreeImages (){   
  
  
  do {
    leftImageIndex = generateRandomIndex();
    centerImageIndex = generateRandomIndex();
     rightImageIndex  =generateRandomIndex();
    

  
    }
  while (leftImageIndex === centerImageIndex || centerImageIndex === rightImageIndex || leftImageIndex===rightImageIndex)
  
  leftImageIndex = generateRandomIndex();
    centerImageIndex = generateRandomIndex();
     rightImageIndex  =generateRandomIndex();

  Image.all;

   leftImageElement.src = Image.all[leftImageIndex].source;
  Image.all[leftImageIndex].shown++


  centerImageElement.src = Image.all[centerImageIndex].source;
  Image.all[centerImageIndex].shown++

  rightImageElement.src = Image.all[rightImageIndex].source;
  Image.all[rightImageIndex].shown++
}
renderThreeImages();


wrapper.addEventListener('click',handleUserClick);

function handleUserClick(event) {
  userAttemptsCounter++;
  

  if (userAttemptsCounter < maxAttempts) {
   // alert('Please click on an image to vote!');
  if (event.target.id==='left') {
    Image.all[leftImageIndex].votes++;
  } else if (event.target.id==='center') {
    Image.all[centerImageIndex].votes++;
  } else if (event.target.id==='right') {
    Image.all[rightImageIndex].votes++;
  }
  renderThreeImages();
  }
else  {
  let getResult;
   let list =document.getElementById('productList');
for (let i = 0; i<Image.all.length; i++){
getResult=document.createElement('li');
list.appendChild(getResult);
getResult.textContent = Image.all[i].imgName +  ' has ' + Image.all[i].votes + ' votes';
}
wrapper.removeEventListener('click',handleUserClick);
}
}





 





