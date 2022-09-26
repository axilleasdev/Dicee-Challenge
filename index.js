

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);



// function diceChange() {
   

 
// if (randomNumber1 === 1) {
//     document.lastChild.lastChild.querySelector(".img1").setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber1 === 2) {
//     document.lastChild.lastChild.querySelector(".img1").setAttribute("src", "images/dice2.png");        
// }
// else if (randomNumber1 === 3) {
//     document.lastChild.lastChild.querySelector(".img1").setAttribute("src", "images/dice3.png");        
// }
// else if (randomNumber1 === 4) {
//     document.lastChild.lastChild.querySelector(".img1").setAttribute("src", "images/dice4.png");        
// }
// else if (randomNumber1 === 5) {
//     document.lastChild.lastChild.querySelector(".img1").setAttribute("src", "images/dice5.png");        
// }
// else {
//     document.lastChild.lastChild.querySelector(".img1").setAttribute("src", "images/dice6.png");         
// }

// if (randomNumber2 === 1) {
//     document.lastChild.lastChild.querySelector(".img2").setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber2 === 2) {
//     document.lastChild.lastChild.querySelector(".img2").setAttribute("src", "images/dice2.png");        
// }
// else if (randomNumber2 === 3) {
//     document.lastChild.lastChild.querySelector(".img2").setAttribute("src", "images/dice3.png");        
// }
// else if (randomNumber2 === 4) {
//     document.lastChild.lastChild.querySelector(".img2").setAttribute("src", "images/dice4.png");        
// }
// else if (randomNumber2 === 5) {
//     document.lastChild.lastChild.querySelector(".img2").setAttribute("src", "images/dice5.png");        
// }
// else {
//     document.lastChild.lastChild.querySelector(".img2").setAttribute("src", "images/dice6.png");         
// }
// }

