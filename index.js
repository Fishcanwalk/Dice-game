//random number 1-6 for dice 1
var numberDiceOne = Math.random();
numberDiceOne = (Math.floor(numberDiceOne*6)+1) ;

//random number 1-6 for dice 2
var numberDiceTwo = Math.random();
numberDiceTwo = (Math.floor(numberDiceTwo*6)+1) ;

//dice 1
var diceOne = document.querySelector('img.img1') ;
var diceImageOne = './images/dice' + numberDiceOne + '.png' ;
diceOne.setAttribute('src' , diceImageOne) ;

//dice 2
var diceOne = document.querySelector('img.img2') ;
var diceImageTwo = './images/dice' + numberDiceTwo + '.png' ;
diceOne.setAttribute('src' , diceImageTwo) ;

whoWin();

function whoWin(){
    if (numberDiceTwo === numberDiceOne) {
        document.querySelector('h1').innerHTML = "Draw !"
    }else if(numberDiceTwo > numberDiceOne){
        document.querySelector('h1').innerHTML = "Player 2 Win! "
    }else{
        document.querySelector('h1').innerHTML = "Player 1 Win!"
    }
}