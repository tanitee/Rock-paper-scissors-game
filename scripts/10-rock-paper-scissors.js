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

let isAutoPlaying = false;
let intervalId;
function autoplay(){

    if(!isAutoPlaying){
        
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }

}


//the event listeners
document.querySelector('.rock-button').addEventListener('click',()=>{
    playGame('Rock');
})

document.querySelector('.paper-button').addEventListener('click',()=>{
    playGame('Paper');
})

document.querySelector('.scissors-button').addEventListener('click',()=>{
    playGame('Scissors');
})

document.querySelector('.js-autoPlay').addEventListener('click',()=>{
    let name = document.querySelector('.js-autoPlay');
    autoplay();
    setTimeout(()=>{
        if(name.innerHTML === 'Auto Play'){
            name.innerHTML = 'Stop Playing';
        }else{
            name.innerHTML = 'Auto Play';
        }
    },1000)
})

document.querySelector('.js-resetButton').addEventListener('click', ()=>{
    let result = document.querySelector('.question-line');
    result.innerHTML = '<p class="display-p">Are you sure you want to reset the score? <button class="question-button yes-button">Yes</button> <button class="question-button no-button">No</button> </p>';

    document.querySelector('.yes-button').addEventListener('click',()=>{
        score.tie = 0;
        score.losses = 0;
        score.win= 0; 
        localStorage.removeItem('score');
        updateScoreElement();
        setTimeout(()=>{
            result.innerHTML = '';
        },1010)
        
    })
    document.querySelector('.no-button').addEventListener('click',()=>{
        result.innerHTML = '';
    })

})

//event listeners to play games using keys

document.addEventListener('keydown', (event) =>{
    if(event.key === 'r'){
        playGame('Rock');
    }
    
})

document.addEventListener('keydown', (event) =>{
    if(event.key === 'p'){
        playGame('Paper');
    }
    
}) 

document.addEventListener('keydown', (event) =>{
    if(event.key === 's'){
        playGame('Scissors');
    }
    
}) 

document.querySelector('.js-autoPlay').addEventListener('keydown',(event)=>{
    let name = document.querySelector('.js-autoPlay');
    if(event.key === 'a'){
        autoplay();
        setTimeout(()=>{
            if(name.innerHTML === 'Auto Play'){
                name.innerHTML = 'Stop Playing';
            }else{
                name.innerHTML = 'Auto Play';
            }
        },1000)
    }
})

document.querySelector('.js-resetButton').addEventListener('keydown',(event)=>{
    if(event.key === 'Backspace'){
        score.tie = 0;
        score.losses = 0;
        score.win= 0; 
        localStorage.removeItem('score');
        updateScoreElement();
    }
})

//end of adding listeners

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

