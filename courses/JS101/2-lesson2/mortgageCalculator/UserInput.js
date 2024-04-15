'use strict';

const { question } = require('readline-sync');

class UserInput {
  getMortageInfo() {
    const loanAmount = this.getLoanAmount();
    const annualPercentageRate = this.getAnnualPercentageRate();
    const loanDuration = this.getLoanDuration();
    return [loanAmount, annualPercentageRate, loanDuration];
  }

  getLoanAmount() {
    while (true) {
      const loanAmount = question('What is the loan amount? ');
      if (this.isValidLoanAmount(loanAmount)) {
        return parseInt(loanAmount, 10);
      }
      console.log('Please enter a positive integer.');
    }
  }

  isValidLoanAmount(loanAmount) {
    return /^\d+$/.test(loanAmount) &&
      !Number.isNaN(parseInt(loanAmount, 10)) &&
      parseInt(loanAmount, 10) > 0;
  }

  getAnnualPercentageRate() {
    const prompt =
      'What is the annual percentage rate? For example, enter 5.5 for 5.5%: ';
    while (true) {
      const annualPercentageRate = question(prompt);
      if (this.isValidAnnualPercentageRate(annualPercentageRate)) {
        return parseFloat(annualPercentageRate) / 100;
      }
      console.log('Please enter a non-negative number');
    }
  }

  isValidAnnualPercentageRate(annualPercentageRate) {
    return /^\d+(\.\d+)?$/.test(annualPercentageRate) &&
      !Number.isNaN(parseFloat(annualPercentageRate)) &&
      parseFloat(annualPercentageRate) >= 0;
  }

  getLoanDuration() {
    while (true) {
      const loanDuration = question('What is the loan duration in years? ');
      if (this.isValidLoanDuration(loanDuration)) {
        return parseFloat(loanDuration);
      }
      console.log('Please enter a positive number.');
    }
  }

  isValidLoanDuration(loanDuration) {
    return /^\d+(\.\d+)?$/.test(loanDuration) &&
    !Number.isNaN(parseFloat(loanDuration)) &&
    parseFloat(loanDuration) > 0;
  }

  continueCalculation() {
    const continuePrompt =
      'Do you want to perform another mortgage calculation? ';
    let wantsToContinue = false;
    while (true) {
      wantsToContinue = question(continuePrompt).toLowerCase();
      if (this.isValidYesOrNo(wantsToContinue)) return wantsToContinue === 'y';
      const invalidPrompt = 'Please enter y for yes or n for no.';
      console.log(invalidPrompt);
    }
  }

  isValidYesOrNo(response) {
    return response === 'y' || response === 'n';
  }
}

const userInput = new UserInput();
const getMortgageInfo = userInput.getMortageInfo.bind(userInput);
const continueCalculation = userInput.continueCalculation.bind(userInput);

exports.getMortgageInfo = getMortgageInfo;
exports.continueCalculation = continueCalculation;
