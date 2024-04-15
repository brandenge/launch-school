'use strict';

const { getPlayerChoice, continueGame } = require('./UserInput');
const Game = require('./Game');

const { execSync } = require('child_process');

class App {
  constructor() {
    this.game = new Game();
  }

  start() {
    let anotherGame = true;
    this.clearPrompt();
    this.prompt('*****   Welcome to Rock Paper Scissors Lizard Spock!   *****\n');
    while (anotherGame) {
      this.game.round += 1;
      this.prompt(`-----  ROUND ${this.game.round}  -----`);
      const playerChoice = getPlayerChoice();
      const computerChoice = Game.randomChoice();
      this.printChoices(playerChoice, computerChoice);
      this.printRound(playerChoice, computerChoice);
      if (this.game.bestOfFiveWinner()) {
        this.printWinner();
        anotherGame = continueGame();
        this.game = new Game();
      }
    }
    this.prompt('*****   Goodbye!   *****');
  }

  clearPrompt() {
    try {
      const result = execSync('clear', { encoding: 'utf-8' });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  prompt(message) {
    console.log(`=> ${message}`);
  }

  printChoices(playerChoice, computerChoice) {
    const prompt =
      `You chose ${playerChoice.toUpperCase()}, the computer chose ${computerChoice.toUpperCase()}`;
    this.prompt(prompt);
  }

  printRound(playerChoice, computerChoice) {
    const winner = this.game.getWinner(playerChoice, computerChoice);
    if (playerChoice === computerChoice) this.prompt("This round is a tie.");
    else if (playerChoice === winner) this.prompt('You win this round!');
    else this.prompt('The computer wins this round!');
    this.prompt(`Your score is: ${this.game.player1Score}. The computer's score is ${this.game.player2Score}\n`);
  }

  printWinner() {
    if (this.game.player1Score === 3) this.prompt(`You won the best of 5!\n`);
    else if (this.game.player2Score === 3) this.prompt(`The computer won the best of 5!\n`);
  }
}

const app = new App();
exports.start = app.start.bind(app);
