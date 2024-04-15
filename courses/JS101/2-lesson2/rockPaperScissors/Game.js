'use strict';

class Game {
  constructor() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.LOSES_TO = {
      rock: ['paper', 'spock'],
      paper: ['scissors', 'lizard'],
      scissors: ['rock', 'spock'],
      lizard: ['rock', 'scissors'],
      spock: ['paper', 'lizard']
    };
    this.round = 0;
  }

  static CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  static randomChoice() {
    const randomIndex = Math.floor(Math.random() * this.CHOICES.length);
    return this.CHOICES[randomIndex];
  }

  getWinner(player1, player2) {
    if (player1 === player2) {
      return undefined;
    } else if (this.LOSES_TO[player1].includes(player2)) {
      this.player2Score += 1;
      return player2;
    } else {
      this.player1Score += 1;
      return player1;
    }
  }

  bestOfFiveWinner() {
    return this.player1Score === 3 || this.player2Score === 3;
  }
}

module.exports = Game;
exports.CHOICES = Game.CHOICES;
