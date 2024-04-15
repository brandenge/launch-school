'use strict';

const Board = require('./Board');

class Game {
  constructor(players) {
    this.players = players;
    this.board = new Board();
  }

  start() {
    let gameOver = false;
    this.board.printBoard();
    while (!gameOver) {
      for (const player of this.players) {
        console.log(`-- Player ${player.playerNumber}'s move ${player.squareSymbol} --\n`);
        this.board.printBoard();
        this.playerMove(player);
        gameOver = this.board.gameOver();
        if (gameOver) break;
      }
    }
  }

  openSquareNumbers() {
    const squareToNumber = {
      topLeft: '1',
      topCenter: '2',
      topRight: '3',
      middleLeft: '4',
      center: '5',
      middleRight: '6',
      bottomLeft: '7',
      bottomCenter: '8',
      bottomRight: '9',
    };

    const openSquares = this.board.openSquares();
    return openSquares.map(square => squareToNumber[square]);
  }

  playerMove(player) {
    const numberToSquare = {
      1: 'topLeft',
      2: 'topCenter',
      3: 'topRight',
      4: 'middleLeft',
      5: 'center',
      6: 'middleRight',
      7: 'bottomLeft',
      8: 'bottomCenter',
      9: 'bottomRight',
    };

    const openSquareNumbers = this.openSquareNumbers();
    const playerMove = player.getPlayerMove(this.board);
    const square = numberToSquare[playerMove];
    this.board.setPlayerMove(square);
  }

  gameOver() {

  }

  getWinner() {
    
  }
}

module.exports = Game;
