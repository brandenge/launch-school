'use strict';

const { question } = require('readline-sync');
const { CHOICES } = require('./Game');

class UserInput {
  static prompt(message) {
    console.log(`=> ${message}`);
  }

  static getPlayerChoice() {
    while (true) {
      this.prompt(`Choose one: ${CHOICES.join(', ')}`);
      const playerChoice = question().toLowerCase();
      if (this.isValidChoice(playerChoice)) {
        for (let choice of CHOICES) {
          if (choice.startsWith(playerChoice)) return choice;
        }
      }
      this.prompt('Please select a valid choice.');
    }
  }

  static isValidChoice(playerChoice) {
    if (playerChoice === 's') return false;
    let isValid = false;
    for (let choice of CHOICES) {
      if (choice.startsWith(playerChoice)) isValid = true;
    }
    return isValid;
  }

  static continueGame() {
    let wantsToContinue = false;
    while (true) {
      this.prompt('Do you want to play another game (y/n)?\n');
      wantsToContinue = question().toLowerCase();
      if (this.isValidYesOrNo(wantsToContinue)) return wantsToContinue === 'y';
      this.prompt('Please enter y for yes or n for no.');
    }
  }

  static isValidYesOrNo(response) {
    return response === 'y' || response === 'n';
  }
}

exports.getPlayerChoice = UserInput.getPlayerChoice.bind(UserInput);
exports.continueGame = UserInput.continueGame.bind(UserInput);
