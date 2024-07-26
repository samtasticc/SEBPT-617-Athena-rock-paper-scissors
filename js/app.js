/*-------------- Constants --------------*/
// 1) 3 user choices of "rock", "paper", or "scissors"
const choices = ['rock', 'paper', 'scissors']

/*-------------- Variables --------------*/
// 2) Define our variables for state
    // The players choice
let playerChoice
    // The comp choice
let computerChoice
    // The match result - win/lose/tie
    // A result message - display the result/who won
let msg

/*------ Cached Element References ------*/
// 3) Reference to DOM element to display messages
const resultDisplayEl = document.querySelector ('#result-display')
    // 3 button DOM references for rock, paper, scissors

/*-------------- Functions --------------*/
// 4) handle player click
const getPlayerChoice = (event) => {
    // console.dir(event.target)
    playerChoice = event.target.id
}
// handle generating random selections for the computer player
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length) // 1.451035 would round down to 1
    computerChoice = choices[randomIndex]
    console.log(computerChoice, 'computerChoice')
}
// compare player/comp choices - check for a winner
const compare = () => {
    if (playerChoice === computerChoice) {
      msg = 'You tied!';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) { 
      // "rock" vs. "scissors"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
      // "paper" vs. "rock"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
      // "scissors" vs. "paper"
      msg = 'Congrats! You win!';
    } else {
      msg = 'You lose! Try again?';
    }
  };
  
// render a win/lose/tie message to the player
    // including player and comp choices in the message
    // clearly indicating who won/result

    const play = (event) => {
        getPlayerChoice(event)
        getComputerChoice()
        console.log(playerChoice)
    }

/*----------- Event Listeners -----------*/

// 5) handle a player clicking a button
document.querySelector('#rock').addEventListener('click', play)
document.querySelector('#paper').addEventListener('click', play)
document.querySelector('#scissors').addEventListener('click', play)

// ! alt way to add event listeners to all buttons
// document.querySelectorAll('button').forEach(function (button) {
//     button.addEventListener('click', play);
//   });  