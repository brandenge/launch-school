let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // => true

/*
let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

Yes, you need the parenthesis. No you cannot remove them. It would be different because the && operator has higher precedence than the || operator.

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

is equivalent to:

let isMoving = (brakingForce < acceleration && speed > 0) || acceleration > 0;

which is different than the original.
*/
