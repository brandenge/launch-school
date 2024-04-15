'use strict';

const HumanPlayer = require('./Player/HumanPlayer');
const ComputerPlayer = require('./Player/ComputerPlayer');
const Game = require('./Game');
const Board = require('./Board');

class App {
  constructor() {
    this.game = undefined;
    this.maxRounds = 0;
    this.round = 0;
  }

  start() {
    this.printWelcome();
    let wantsToPlayAgain = true;
    console.clear();
    while (wantsToPlayAgain) {
      this.initializeGameSeries();
      while (!this.gameSeriesWinner()) {
        this.game.start();
        this.endRound(this.game);
      }
      wantsToPlayAgain = this.players[0].playAgain();
    }
    this.printGoodbye();
  }

  initializeGameSeries() {
    const player = new HumanPlayer(1, Board.X_SQUARE);
    this.maxRounds = player.getMaxRounds();
    let opponent;
    let difficulty;
    if (player.getHumanOpponent()) {
      opponent = new HumanPlayer(2, Board.O_SQUARE);
    } else {
      difficulty = player.getDifficulty();
      opponent = new ComputerPlayer(2, Board.O_SQUARE, difficulty);
    }
    this.game = new Game([player, opponent]);
  }

  endRound(game) {
    game.board.printBoard();
    this.round += 1;
    console.log(`-----  ROUND ${this.round} RESULT -----\n`);
    const winner = game.getWinner();
    this.printWinner(winner);
    this.updateScore(winner);
    this.printScore();
  }

  gameSeriesWinner() {
    return this.player1Score === Math.ceil(this.gameSeriesMaxRounds / 2) ||
           this.player2Score === Math.ceil(this.gameSeriesMaxRounds / 2);
  }

  updateScore(winner) {
    if (winner === 'Player 1') this.game.players[0].score += 1;
    else if (winner === 'Player 2') this.game.players[1].score += 1;
  }

  printWelcome() {
    console.log('*****   Welcome to Tic Tac Toe!   *****\n');
  }

  printScore() {
    console.log(`-----  Player 1 Score: ${this.game.players[0].score}  -----\n`);
    console.log(`-----  Player 2 Score: ${this.game.players[1].score}  -----\n`);
  }

  printWinner(winner) {
    if (winner === 'Tie Game') {
      console.log(`-----  The game was a tie!  -----\n`);
    } else {
      console.log(`-----  ${winner} won!  -----\n`);
    }
  }

  printGoodbye() {
    console.log('*****   Thanks for playing Tic Tac Toe!   *****\n');
    console.log('*****   Goodbye!   *****\n');
  }
}

const app = new App();
exports.start = app.start.bind(app);
