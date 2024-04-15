'use strict';

const Player = require('./Player');
const { question } = require('readline-sync');

class HumanPlayer extends Player {
  constructor() {
    super();
  }

  prompt(message) {
    return `=> ${message}`;
  }

  getHumanOpponent() {
    const wantsHumanOpponent = question(
      this.prompt('Are you playing against a friend (y/n)? '))
      .toLowerCase().trim();
    console.log();
    return wantsHumanOpponent === 'y';
  }

  getDifficulty() {
    while (true) {
      const difficulty = question(
        this.prompt('Please enter a difficulty level 0-4 (0 easy, 1 medium, 2 hard, 3 impossible): '))
        .toLowerCase().trim();
      console.log();
      if (this.isValidDifficulty(difficulty)) {
        return difficulty;
      } else {
        console.log('Sorry, that is not a valid difficulty.');
      }
    }
  }

  isValidDifficulty(difficulty) {
    return ['0', '1', '2', '3'].includes(difficulty);
  }

  getMaxRounds() {
    while (true) {
      let maxRounds = question(
        this.prompt('Please enter the maximum number of rounds that you want to play (as an integer): '))
        .toLowerCase().trim();
      console.log();
      maxRounds = parseInt(maxRounds, 10);
      if (this.isValidRoundCount(maxRounds)) {
        return maxRounds;
      } else {
        console.log('Sorry, that is not a valid number of rounds.');
      }
    }
  }

  isValidRoundCount(maxRounds) {
    return Number.isInteger(maxRounds);
  }

  openSquareNumbers(board) {
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

    const openSquares = board.openSquares();
    return openSquares.map(square => squareToNumber[square]);
  }

  getPlayerMove(board) {
    const openSquareNumbers = this.openSquareNumbers(board);
    while (true) {
      const playerMove = question(this.prompt(`Please choose an open square number (${this.joinOr(openSquareNumbers)}): `))
        .trim();
      console.log('');
      if (this.isValidMove(playerMove, openSquareNumbers)) {
        return playerMove;
      } else {
        console.log('Sorry, that is not a valid move.');
      }
    }
  }

  joinOr(array, delimiter = ', ', lastJoin = 'or') {
    return array.slice(0, -1).join(delimiter) + `, ${lastJoin} ` + array.at(-1);
  }

  isValidMove(playerMove, openSquareNumbers) {
    return openSquareNumbers.includes(playerMove);
  }

  playAgain() {
    let wantsToPlayAgain = false;
    while (true) {
      wantsToPlayAgain = question(
        this.prompt('Do you want to play another game (y/n)? '))
        .toLowerCase().trim()[0];
      if (this.isValidYesOrNo(wantsToPlayAgain)) {
        return wantsToPlayAgain === 'y';
      }
      console.log('Please enter y for yes or n for no.');
    }
  }

  isValidYesOrNo(response) {
    return response === 'y' || response === 'n';
  }
}

module.exports = HumanPlayer;
