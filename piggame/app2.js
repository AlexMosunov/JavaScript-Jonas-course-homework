
//NEW CHALLENGE 
//CONDITIONS:
// create button that takes the value from the placeholder when clicked 
// if there is no value or value is not a number , then the program does not accept the value
// When we submit the number into value and click the button, the program executes and the field becomes clear
// 


var scores, roundScores, activePlayer, gamePlaying, winningScore, newParagraph;

init();

var previousDice = 0;
gamePlaying = false; 
//var x = document.querySelector(".final-score").value;
//console.log(x);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
document.querySelector('.btn-submit').addEventListener('click', setWinningScore );

/*
function checkIfWorks() {
    document.querySelector('#current-1').innerHTML = 777;
}
*/


function setWinningScore() {
    var inputValue = document.querySelector('.final-score').value;
    console.log(inputValue);
    var input = document.querySelector('.final-score');
    if(inputValue > 0) {
        gamePlaying = true;
        winningScore = inputValue;
        document.querySelector('.winning-score').innerHTML = "Your Winning Score is " + inputValue;
        document.querySelector('.final-score').value = '';
        input.setAttribute("type", "hidden");
        
       /* var btn = document.createElement("BUTTON");
        btn.innerHTML = "SET NEW SCORE";
        document.body.appendChild(btn);*/
        //input.setAttribute("placeholder", "HAVE A GREAT GAME!");
        //input.classList.add("green");
        //newParagraph = document.createElement("p");
        //newParagraph.innerHTML = "<p>HAVE A GREAT GAME!</p>";
        //newParagraph.classList.add("green");
        //document.body.appendChild(newParagraph);


    } else {
        document.querySelector('.final-score').value = '';
        input.setAttribute("placeholder", "YOU ENTERED WRONG VALUE");
        gamePlaying = false;
        input.classList.add("red");
        }
}


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // 4.EXTRA Player looses entire score when rolls two 6 in a row
       /* if (dice === previousDice && previousDice === 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        } */

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        var diceDOM2 = document.querySelector('.dice2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
         if (dice !== 1 && dice2 !== 1) {
            //Add score
            roundScores += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else {
            //Next Player
            nextPlayer();
        }
        //previousDice = dice;
        
    } 

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to Global score
        scores[activePlayer] += roundScores;
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //var inputScore = document.getElementById('input').value;
        /*
        var input = document.querySelector('.final-score').value;
        var winningScore;
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
       */




        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        } 
    }});



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScores = 0;
    gamePlaying = true;
    

    document.querySelector('.final-score').setAttribute("type", "text");
    document.querySelector('.winning-score').innerHTML = "";

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

