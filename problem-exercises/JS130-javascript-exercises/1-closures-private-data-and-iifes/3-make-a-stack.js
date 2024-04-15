// eslint-disable-next-line
function newStack() {
  const stack = [];

  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(value => {
        console.log(value);
      });
    }
  };
}
