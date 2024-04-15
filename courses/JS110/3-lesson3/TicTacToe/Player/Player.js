'use strict';

class Player {
  constructor(playerNumber, squareSymbol) {
    this.playerNumber = playerNumber;
    this.squareSymbol = squareSymbol;
    this.score = 0;
  }
}

module.exports = Player;
