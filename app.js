
'use strict';

let clicks = document.getElementById('wrapper');
let results = document.getElementById('edit');
let clickTotal = [];
let itemName = [];
let clicked = [];

function randomInteger () {
  return (Math.floor(Math.random() * Image.all.length));
}


let Image = function(imgName,source) {   
  this.imgName = imgName;
  this.source = source;
  this.votes = 0;
  this.displayedImage = 0;
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



function displayImage (){   
  
  let leftPictureIndex = randomInteger();
  let centerPictureIndex = randomInteger();
  let rightPictureIndex = randomInteger();
  while (centerPictureIndex === leftPictureIndex)
  {
    centerPictureIndex = randomInteger();

  }
  while (rightPictureIndex === leftPictureIndex || rightPictureIndex === centerPictureIndex)
  {
    rightPictureIndex = randomInteger();
  }
  let leftImg = document.getElementById('left');
  leftImg.src = Image.all[leftPictureIndex].source;
  leftImg.alt = Image.all[leftPictureIndex].imgName;


  let centerImg = document.getElementById('center');
  centerImg.src = Image.all[centerPictureIndex].source;
  centerImg.alt = Image.all[centerPictureIndex].imgName;

  let rightImg = document.getElementById('right');
  rightImg.src = Image.all[rightPictureIndex].source;
  rightImg.alt = Image.all[rightPictureIndex].imgName;
}
displayImage();

function handleImgClick(event) {
  let imgid = event.target.id;
  let imgAlt = event.target.alt;

  if (imgid === 'wrapper') {
    alert('Please click on an image to vote!');
  } else if (clickTotal < 25) {
    for (let i = 0; i < Image.all.length; i++) {
      if(imgAlt === Image.all[i].imgName) {
        Image.all[i].votes += 1;
        clickTotal++;
      }
      if (clickTotal === 25) {
        document.getElementById('edit');
        edit.style.visibility = 'visible';
      } else {
        document.getElementById('edit');
        edit.style.visibility = 'hidden';
        displayImage();
      }
    }
  }
}
 function resultsRender(){
  let ulEl = document.createElement('ul');
  ulEl.setAttribute('id', 'resultList');
  document.getElementById('productList').appendChild(ulEl);

   for (let i = 0; i < Image.all.length; i++) {
     let liEl = document.createElement('li');
     liEl.setAttribute('class', 'products');
     liEl.textContent = Image.all[i].imgName + ' is voted ' + Image.all[i].votes + ' times.';
     ulEl.appendChild(liEl);
   }

 }
clicks.addEventListener('click', handleImgClick);

