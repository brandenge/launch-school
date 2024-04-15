// eslint-disable-next-line
function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  };
}

// Without using call or apply
// function myBind(func, context) {
//   return function () {
//     context.method = func;
//     context.method();
//     delete context.method;
//   };
// }
