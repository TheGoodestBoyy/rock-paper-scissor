let bestOfGame;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const winnerAnnouncer = document.getElementById('WinnerAnnouncer');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch(playRound(getComputerSelection(),button.id))
        {
            case 0:
                winnerAnnouncer.innerHTML = "It's a draft. Try again.";//draft
                break;
            case 1:
                winnerAnnouncer.innerHTML = "Computer win this round.";//Computer win
                computerScore += 1;
                break;
            case 2:
                winnerAnnouncer.innerHTML = "Player win this round.";//Player win
                playerScore += 1;
                break;
            case 10:
                winnerAnnouncer.innerHTML = "Choice not valid. Try again.";
                break;
        }
    });
  });
  

function startGame() 
{
    bestOfGame = SelectAtTheBestOfGame();

    while (playerScore < bestOfGame & computerScore < bestOfGame)
    {
        switch(playRound(getComputerSelection(),getPlayerSelection()))
        {
            case 0:
                //draft
                break;
            case 1:
                //Computer win
                computerScore += 1;
                break;
            case 2:
                //Player win
                playerScore += 1;
                break;
            case 10:
                break;
        }
    }

    if (playerScore > computerScore)
    {
        console.log('Player win!');
    } else
    {
        console.log('Computer win!');
    }
}

function playRound(ComputerSelection,PlayerSelection)
{   
    return(ChooseWinner(ComputerSelection,PlayerSelection));
}

function getComputerSelection()
{
    return(getRndInteger(1,3))
}

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getPlayerSelection()
{
    return(prompt('Make your choice: Rock, Paper or Scissors?').toLowerCase());
}

function SelectAtTheBestOfGame()
{
    return(3);
}

/*
    return value:
    0: draft
    1: Computer wins
    2: Player wins
    10: not valid player choice
*/
function ChooseWinner(computerSelection,playerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection != 'rock' & playerSelection != 'paper' & playerSelection != 'scissors')
    {
        return(10)
    }

    if (computerSelection == '3') //Rock
    {
        if (playerSelection == 'rock') {
            return(0);
        }
        if (playerSelection == 'paper') {
            return(2);
        }
        if (playerSelection == 'scissors') {
            return(1);
        }
    }
    if (computerSelection == '2') //paper
    {
        if (playerSelection == 'rock') {
            return(1);
        }
        if (playerSelection == 'paper') {
            return(0);
        }
        if (playerSelection == 'scissors') {
            return(2);
        }
    }
    if (computerSelection == '1') //scissor
    {
        if (playerSelection == 'rock') {
            return(2);
        }
        if (playerSelection == 'paper') {
            return(1);
        }
        if (playerSelection == 'scissors') {
            return(0);
        }
    }
}