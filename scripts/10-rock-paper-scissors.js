let score = JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    losses : 0,
    tie : 0
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `wins = ${score.win} . losses = ${score.losses} . tie = ${score.tie}`;
}

updateScoreElement();

/*if (score === null){
score = {
    win : 0,
    losses : 0,
    tie : 0
};
}*/

function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = '' ;

if(randomNumber >= 0 && randomNumber< 1/3 ){
    computerMove = ('Rock');
}else  if(randomNumber >= 1 / 3  && randomNumber < 2/3 ){
    computerMove = ('Paper');
}else if(randomNumber >= 2 / 3 && randomNumber < 1 ){
    computerMove = ('Scissors');
}
return computerMove;
}


function playGame(playerMove){

const computerMove = pickComputerMove();

let result = '';


if (playerMove === 'Scissors'){
    if(computerMove === 'Rock'){
        result = 'You lose';
    }else if (computerMove ==='Paper'){
        result = 'You win';
    }else if(computerMove === 'Scissors'){
        result = 'tie';
    }

}else if(playerMove === 'Paper') {
        
        if(computerMove === 'Rock'){
            result = 'You win';
        }else if (computerMove === 'Paper'){
            result = 'tie';
        }else if(computerMove === 'Scissors'){
            result = 'You lose';
        }

    }else if(playerMove === 'Rock'){
        
        if(computerMove === 'Rock'){
            result = 'tie';
        }else if (computerMove === 'Paper'){
            result = 'You lose';
        }else if(computerMove === 'Scissors'){
            result = 'You win';
        }
}


if(result === 'You win'){
    score.win +=1;
}else if(result === 'You lose'){
    score.losses +=1;
}else{
    score.tie+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = `${result}.`;
document.querySelector('.js-moves').innerHTML = `  You
<img class="move-icon" src="pictures/${playerMove}-emoji.png" alt="">
<img class="move-icon" src="pictures/${computerMove}-emoji.png" alt="">
Computer`;



}

