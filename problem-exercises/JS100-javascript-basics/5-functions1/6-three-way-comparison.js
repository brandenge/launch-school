const compareByLength = function(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  }
  else if (str1.length > str2.length) {
    return 1;
  } else {
    return 0;
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0
