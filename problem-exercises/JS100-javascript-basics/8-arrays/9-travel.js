const contains = function(str, strArr) {
  console.log(!!strArr.find(element => element === str));
  return !!strArr.find(element => element === str);
}

const contains2 = function(str, strArr) {
  let result = false;
  strArr.forEach(element => {
    if (element === str) {
      result = true;
    }
  });
  console.log(result);
  return result;
}

const contains3 = function(str, strArr) {
  for (let element of strArr) {
    if (element === str) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

const contains4 = function(str, strArr) {
  console.log(strArr.some(element => element === str));
  return strArr.some(element => element === str);
}

const contains5 = function(str, strArr) {
  console.log(!!strArr.filter(element => element === str).length);
  return !!strArr.filter(element => element === str).length;
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false
contains2('Barcelona', destinations); // true
contains2('Nashville', destinations); // false
contains3('Barcelona', destinations); // true
contains3('Nashville', destinations); // false
contains4('Barcelona', destinations); // true
contains4('Nashville', destinations); // false
contains5('Barcelona', destinations); // true
contains5('Nashville', destinations); // false
