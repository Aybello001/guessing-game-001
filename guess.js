
const answer = Math.floor(Math.random() * 2 + 1);
let guesses = 0;

document.getElementById('submit').onclick = function(){
    let guess = document.getElementById('input').value
    guesses += 1;
    let empty = ""; 
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess == answer){
        alert('congratulations you win in' + ' ' + guesses + 'attempts');
    }
    else if(guess < answer){
        alert('you are lower than expected');
    }
    else if(guess > answer){
        alert('you are higher than expected');
    }

}


