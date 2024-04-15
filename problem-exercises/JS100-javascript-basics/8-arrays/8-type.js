const filter = function(input) {
  console.log(Array.isArray(input));
  console.log(input instanceof Array);
}

filter([1, 2, 3]);
filter([]);
filter([null]);
filter([undefined]);
filter('');
filter(0);
filter(null);
filter(undefined);
filter({});
