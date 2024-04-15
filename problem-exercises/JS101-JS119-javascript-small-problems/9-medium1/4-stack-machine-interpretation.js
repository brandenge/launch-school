const VALID_TOKENS = {
  PUSH: true,
  POP: true,
  ADD: true,
  SUB: true,
  MULT: true,
  DIV: true,
  REMAINDER: true,
  PRINT: true
};

const tokenIsValid = (token) => VALID_TOKENS[token] || Number.isInteger(+token);

const minilang = (commands) => {
  const stack = ['1']; // initialize with dummy element for stack length check
  let register = 0;
  const tokens = commands.split(' ');

  for (const token of tokens) {
    if (!tokenIsValid(token)) return `ERROR: invalid token: ${token}`;

    if (token === 'PUSH') stack.push(register);
    else if (token === 'ADD') register += +stack.pop();
    else if (token === 'SUB') register -= +stack.pop();
    else if (token === 'MULT') register *= +stack.pop();
    else if (token === 'DIV') register = Math.floor(register / +stack.pop());
    else if (token === 'REMAINDER') register = Math.floor(register % +stack.pop());
    else if (token === 'POP') register = +stack.pop();
    else if (token === 'PRINT') console.log(register);
    else register = +token;

    if (stack.length === 0) return 'ERROR: pop operation on an empty stack';
  }

  return undefined;
};

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
