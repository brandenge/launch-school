/*
Output:

neigh
tweet tweet
*crickets*

The reason is that there are no break statements in each case clause.
This causes the flow of control (or execution) to "fall through" after
the first case clause evaluates as true, executing all subsequent case clauses
below it automatically until it reaches a break statement or the end of the
switch statement. This occurs even if it fails the case clause condition,
because those are not even evaluated anymore at that point.
*/

// let animal = 'horse';

// switch (animal) {
//   case 'duck':
//     console.log('quack');
//   case 'squirrel':
//     console.log('nook nook');
//   case 'horse':
//     console.log('neigh');
//   case 'bird':
//     console.log('tweet tweet');
//   default:
//     console.log('*cricket*');
// }
