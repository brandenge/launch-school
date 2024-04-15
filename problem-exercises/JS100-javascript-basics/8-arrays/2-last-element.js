const last = function(arr) {
  console.log(arr[arr.length - 1]);
  return arr[arr.length - 1];
}

last(['Earth', 'Moon', 'Mars']); // 'Mars'
last([]); // undefined
