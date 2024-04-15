'use strict';

class Board {
  constructor() {
    this.squares = {
      topLeft: Board.OPEN_SQUARE,
      topCenter: Board.OPEN_SQUARE,
      topRight: Board.OPEN_SQUARE,
      middleLeft: Board.OPEN_SQUARE,
      center: Board.OPEN_SQUARE,
      middleRight: Board.OPEN_SQUARE,
      bottomLeft: Board.OPEN_SQUARE,
      bottomCenter: Board.OPEN_SQUARE,
      bottomRight: Board.OPEN_SQUARE,
    };
    this.winner = undefined;
  }

  static OPEN_SQUARE = ' ';
  static X_SQUARE = '❌';
  static O_SQUARE = '🔵';

  printBoard() {
    console.clear();
    console.log(`You are the ${Board.X_SQUARE}'s. The computer is the ${Board.O_SQUARE}'s.\n`);
    console.log(
      `|-----------------|\n` +
      `|     |     |     |\n` +
      `|  ${this.squares.topLeft}  |  ${this.squares.topCenter}  |  ${this.squares.topRight}  |\n` +
      `|     |     |     |\n` +
      `|-----+-----+-----|\n` +
      `|     |     |     |\n` +
      `|  ${this.squares.middleLeft}  |  ${this.squares.center}  |  ${this.squares.middleRight}  |\n` +
      `|     |     |     |\n` +
      `|-----+-----+-----|\n` +
      `|     |     |     |\n` +
      `|  ${this.squares.bottomLeft}  |  ${this.squares.bottomCenter}  |  ${this.squares.bottomRight}  |\n` +
      `|     |     |     |\n` +
      `|-----------------|\n`
    );
  }

  setPlayerMove(square, isPlayer1 = true) {
    if (isPlayer1) this.squares[square] = Board.X_SQUARE;
    else this.squares[square] = Board.O_SQUARE;
  }

  openSquares() {
    return Object.keys(this.squares)
      .filter(square => this.squares[square] === Board.OPEN_SQUARE);
  }

  isFull() {
    return this.openSquares().length === 0;
  }

  winningMoves() {
    const {
      topLeft, topCenter, topRight,
      middleLeft, center, middleRight,
      bottomLeft, bottomCenter, bottomRight
    } = this.squares;

    return [
      // Horizontal Wins
      [topLeft, topCenter, topRight],
      [middleLeft, center, middleRight],
      [bottomLeft, bottomCenter, bottomRight],
      // Vertical Wins
      [topLeft, middleLeft, bottomLeft],
      [topCenter, center, bottomCenter],
      [topRight, middleRight, bottomRight],
      // Diagonal Wins
      [topLeft, center, bottomRight],
      [topRight, center, bottomLeft],
    ];
  }

  playerHasWon(playerSquare) {
    return this.winningMoves().some(row => row.every(square => {
      return square === playerSquare;
    }));
  }

  gameOver() {
    const player1Won = this.playerHasWon(Board.X_SQUARE);
    const player2Won = this.playerHasWon(Board.O_SQUARE);
    const boardIsFull = this.isFull();

    if (player1Won) this.winner = 'Player 1';
    else if (player2Won) this.winner = 'Player 2';
    else if (boardIsFull) this.winner = 'Tie Game';

    if (player1Won || player2Won || boardIsFull) return true;
    else return false;
  }

  getWinner() {
    return this.winner;
  }
}

module.exports = Board;
