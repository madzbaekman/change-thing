// 작성자 : 백성범
// 작성일 : 2022/05/25

// 변수 선언 및 할당
const container = document.querySelector('.container');
const contentBox = document.querySelectorAll('.content-box');
const headingNumTwo = document.querySelector('.content-wrap h2');
const modalBack = document.querySelector('.modal-bg');
const closeBtn = document.querySelector('.close');

// change a color 
let colorSet = ['red','orange','yellow','green','skyblue','blue','violet','black','gray'];

contentBox[0].addEventListener('click', function(){
    let mathRandom = Math.floor(Math.random() * (8 - 0) + 1);
    container.style.backgroundImage = 'none';
    container.style.backgroundColor = colorSet[mathRandom];

    if (container.style.backgroundColor == 'black') {
      headingNumTwo.style.color = '#fff';
    } else if (container.style.backgroundColor != 'black') {
      headingNumTwo.style.color = '#222';
    }
});

// change a background image
let imageSet = ['background1.jpg','background2.jpg','background3.png','background4.png'];

contentBox[1].addEventListener('click', function(){
    let imageMathRandom = Math.floor(Math.random() * (3 - 0) + 1);
    container.style.backgroundColor = '';
    container.style.backgroundImage = `url("../images/${imageSet[imageMathRandom]}")`;
  });
  

// explain part
contentBox[2].addEventListener('click', function(){
  modalBack.classList.add('modal-show');
});

closeBtn.addEventListener('click', function(){
  modalBack.classList.remove('modal-show');
});
