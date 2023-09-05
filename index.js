let randomNumber1 = Math.random();
randomNumber1 *= 6;
let roundNumber = Math.floor(randomNumber1) + 1;

let randomNumber2 = Math.random();
randomNumber2 *= 6;
let roundNumber2 = Math.floor(randomNumber2) + 1;

// player 1

if(roundNumber === 1){
    let player1 = document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
if(roundNumber === 2){
    let player1 = document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
if(roundNumber === 3){
    let player1 = document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
if(roundNumber === 4){
    let player1 = document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
if(roundNumber === 5){
    let player1 = document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
if(roundNumber === 6){
    let player1 = document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

// player 2

if(roundNumber2 === 1){
    let player2 = document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
if(roundNumber2 === 2){
    let player2 = document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
if(roundNumber2 === 3){
    let player2 = document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
if(roundNumber2 === 4){
    let player2 = document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
if(roundNumber2 === 5){
    let player2 = document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
if(roundNumber2 === 6){
    let player2 = document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

// result 

if(roundNumber > roundNumber2){
    let heading= document.getElementById("heading").innerHTML="Player1 won🏆";
}
else if( roundNumber2 > roundNumber){
    let heading=  document.getElementById("heading").innerHTML="Player2 won🏆";
}
else {
    let heading=  document.getElementById("heading").innerHTML="🤝Draw";
}