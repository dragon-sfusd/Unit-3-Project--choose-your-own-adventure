let firstButton=document.querySelector(".button-one");
let secondButton=document.querySelector(".button-two");
let thirdButton=document.querySelector(".button-three");
let firstAnswer=document.querySelector(".answer-one");
let secondAnswer=document.querySelector(".answer-two");
let thirdAnswer=document.querySelector(".answer-three");

firstButton.onclick=function(){
    firstAnswer.style.display="block";
};


secondButton.onclick=function(){
    secondAnswer.style.display="block";
};

thirdButton.onclick=function(){
    thirdAnswer.style.display="block";
};




