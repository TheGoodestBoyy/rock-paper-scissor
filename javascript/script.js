
let _computerSelection = getComputerSelection();
let bestOfGame;

function game() 
{
    let playerScore = 0;
    let computerScore = 0;

    bestOfGame = SelectAtTheBestOfGame();

    while (playerScore < bestOfGame || computerScore < bestOfGame)
    {
        switch(playRound())
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
        }
    }
}

function playRound()
{   
    return(ChooseWinner(_computerSelection,getPlayerSelection()));
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

function ChooseWinner(computerSelection,playerSelection)
{
    switch(computerSelection = '3') //Rock
    {
        case playerSelection = 'rock':
            return(0);
            break;
        case playerSelection = 'paper':
            return(2);
            break;
        case playerSelection = 'scissors':
            return(1);
            break;
    }
    switch(computerSelection = '2') //paper
    {
        case playerSelection = 'rock':
            return(1);
            break;
        case playerSelection = 'paper':
            return(0);
            break;
        case playerSelection = 'scissors':
            return(2);
            break;
    }
    switch(computerSelection = '1') //scissor
    {
        case playerSelection = 'rock':
            return(2);
            break;
        case playerSelection = 'paper':
            return(1);
            break;
        case playerSelection = 'scissors':
            return(0);
            break;
    }
}