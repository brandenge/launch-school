// Normal backreferences
const formatDate1 = function(date) {
  console.log(date.replace(/^(\d{4})([\-\/])(\d{2})\2(\d{2})$/, '$4.$3.$1'));
  return date.replace(/^(\d{4})([\-\/])(\d{2})\2(\d{2})$/, '$4.$3.$1');
}

formatDate1('2016-06-17'); // -> '17.06.2016'
formatDate1('2017/05/03'); // -> '03.05.2017'
formatDate1('2015/01-31'); // -> '2015/01-31' (no change)

/*
Named capture groups both inside and outside the regex
Note the \k<..> syntax for backreferencing a named capture group within a regex (same as Ruby)
Note the $<..> syntax for backreferencing a named capture group in a replacement string.
*/
const formatDate2 = function(date) {
  console.log(date.replace(/^(?<year>\d{4})(?<delimiter>[\-\/])(?<month>\d{2})\k<delimiter>(?<day>\d{2})$/, '$<day>.$<month>.$<year>'));
  return date.replace(/^(?<year>\d{4})(?<delimiter>[\-\/])(?<month>\d{2})\k<delimiter>(?<day>\d{2})$/, '$<day>.$<month>.$<year>');
}

formatDate2('2016-06-17'); // -> '17.06.2016'
formatDate2('2017/05/03'); // -> '03.05.2017'
formatDate2('2015/01-31'); // -> '2015/01-31' (no change)
