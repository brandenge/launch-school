// eslint-disable-next-line
function myBind(func, context, ...partialArgs) {
  return function(...moreArgs) {
    return func.call(context, ...partialArgs, ...moreArgs);
  };
}
