'use strict';

const Player = require('./Player');

class ComputerPlayer extends Player {
  constructor(squareSymbol, difficulty) {
    const DIFFICULTY_LEVELS = [
      'easy',
      'medium',
      'hard',
      'impossible'
    ];

    super();
    this.squareSymbol = squareSymbol;
    this.difficulty = DIFFICULTY_LEVELS[difficulty];
  }

  async getPlayerMove(board) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    switch (this.difficulty) {
      case 'medium'     : return this.mediumDifficultyMove(board);
      case 'hard'       : return this.hardDifficultyMove(board);
      case 'impossible' : return this.impossibleDifficultyMove(board);
      default           : return this.easyDifficultyMove(board);
    }
  }

  easyDifficultyMove(board) {
    return this.randomMove(board);
  }

  mediumDifficultyMove(board) {
    return this.defensiveMove(board) ||
           this.randomMove(board);
  }

  hardDifficultyMove(board) {
    return this.offensiveMove(board) ||
           this.defensiveMove(board) ||
           this.randomMove(board);
  }

  impossibleDifficultyMove(board) {
    return this.offensiveMove(board) ||
           this.defensiveMove(board) ||
           this.centerMove(board)    ||
           this.randomMove(board);
  }

  randomMove(board) {
    const openSquares = board.openSquares();
    const randomOpenSquare =
      openSquares[Math.floor(Math.random() * openSquares.length)];
    return randomOpenSquare;
  }

  defensiveMove(board) {
    return board;
  }

  offensiveMove(board) {
    return board;
  }

  centerMove(board) {
    return board;
  }
}

module.exports = ComputerPlayer;
