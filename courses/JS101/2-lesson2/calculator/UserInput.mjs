'use strict';

import { question } from 'readline-sync';
import { execSync } from 'child_process';

// Current workaround for importing JSON files with ES modules
// Reading the JSON file directly
import { readFile } from 'fs/promises';
const PROMPTS = JSON.parse(
  await readFile(
    new URL('./prompts.json', import.meta.url)
  )
);

export default class UserInput {
  constructor(lang) {
    this.lang = lang;
  }

  prompt(message) {
    return `=> ${message}`;
  }

  clearPrompt() {
    try {
      const result = execSync('clear', { encoding: 'utf-8' });
      console.log(result);
    } catch (error) {
      const errorPrompt =
        `${PROMPTS[this.lang]["errors"]["command"]} ${error.message}`;
      console.error(this.prompt(errorPrompt));
    }
  }

  getUserOperandsAndOperator() {
    const num1 = this.getValidNumber(1);
    const num2 = this.getValidNumber(2);
    const operator = this.getValidOperator();
    const operations = {
      1: '+',
      2: '-',
      3: '*',
      4: '/',
    };
    return [num1, num2, operations[operator]];
  }

  getValidNumber(orderNum) {
    const numPrompt = `${PROMPTS[this.lang]["getNumber"]} ${orderNum}: `;
    const invalidPrompt =  PROMPTS[this.lang]["invalidNumber"];

    while (true) {
      const num = parseFloat(question(this.prompt(numPrompt)));
      if (this.isValidNumber(num)) return num;
      this.clearPrompt();
      console.log(this.prompt(invalidPrompt));
    }
  }

  getValidOperator() {
    const operatorPrompt = PROMPTS[this.lang]["getOperator"];
    const invalidPrompt = PROMPTS[this.lang]["invalidOperator"];

    while (true) {
      const operator = question(this.prompt(operatorPrompt));
      if (this.isValidOperator(operator)) return operator;
      this.clearPrompt();
      console.log(this.prompt(invalidPrompt));
    }
  }

  isValidNumber(num) {
    return !Number.isNaN(num);
  }

  isValidOperator(operatorChoice) {
    return ['1', '2', '3', '4'].includes(operatorChoice);
  }

  continueCalculation() {
    const continuePrompt = PROMPTS[this.lang]["continueCalculation"];
    const invalidPrompt = PROMPTS[this.lang]["invalidYesOrNo"];

    while (true) {
      const wantsToContinue =
        question(this.prompt(continuePrompt)).toLowerCase();
      if (this.isValidYesOrNo(wantsToContinue)) return wantsToContinue === 'y';
      this.clearPrompt();
      console.log(this.prompt(invalidPrompt));
    }
  }

  isValidYesOrNo(response) {
    return response === 'y' || response === 'n';
  }
}
