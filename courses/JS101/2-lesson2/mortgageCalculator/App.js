'use strict';

const { getMortgageInfo, continueCalculation } = require('./UserInput');
const { calcMonthlyPayment } = require('./MortgageCalculator');
const { execSync } = require('child_process');

class App {
  start() {
    let anotherCalculation = true;
    while (anotherCalculation) {
      this.clearPrompt();
      console.log('Welcome to the Mortgage Calculator!');
      const [loanAmount, annualPercentageRate, loanYears] =
        getMortgageInfo();
      const monthlyPayment =
        calcMonthlyPayment(loanAmount, annualPercentageRate, loanYears);
      console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
      anotherCalculation = continueCalculation();
    }
    console.log('Goodbye!');
  }

  clearPrompt() {
    try {
      const result = execSync('clear', { encoding: 'utf-8' });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

const app = new App();
exports.start = app.start.bind(app);
