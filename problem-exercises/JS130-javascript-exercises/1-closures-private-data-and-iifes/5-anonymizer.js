const Account = (function() {
  const INVALID_PASSWORD_MESSAGE = 'Invalid Password';

  const users = new WeakMap();

  function isValidPassword(testPassword, user) {
    return testPassword === users.get(user).password;
  }

  function getRandomLetterNumber() {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    const DIGITS = '1234567890';
    const VALID_CHARS = [...ALPHABET, ...ALPHABET.toUpperCase(), ...DIGITS];

    const randomIndex = Math.floor(Math.random() * VALID_CHARS.length);
    return VALID_CHARS[randomIndex];
  }

  function anonymize() {
    const SEQUENCE_LENGTH = 16;
    const randomLetterNumbers = [];

    for (let index = 0; index < SEQUENCE_LENGTH; index++) {
      randomLetterNumbers.push(getRandomLetterNumber());
    }

    return randomLetterNumbers.join('');
  }

  return {
    init(email, password, firstName, lastName) {
      users.set(this, {
        email,
        password,
        firstName,
        lastName,
      });
      this.displayName = anonymize();
      return this;
    },
    reanonymize(testPassword) {
      if (!isValidPassword(testPassword, this)) return INVALID_PASSWORD_MESSAGE;
      this.displayName = anonymize();
      return true;
    },

    resetPassword(testPassword, newPassword) {
      if (!isValidPassword(testPassword, this)) return INVALID_PASSWORD_MESSAGE;
      users.get(this).password = newPassword;
      return true;
    },

    firstName(testPassword) {
      if (!isValidPassword(testPassword, this)) return INVALID_PASSWORD_MESSAGE;
      return users.get(this).firstName;
    },

    lastName(testPassword) {
      if (!isValidPassword(testPassword, this)) return INVALID_PASSWORD_MESSAGE;
      return users.get(this).lastName;
    },

    email(testPassword) {
      if (!isValidPassword(testPassword, this)) return INVALID_PASSWORD_MESSAGE;
      return users.get(this).email;
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                      // logs the firstName function
console.log(fooBar.email);                          // logs the email function
console.log(fooBar.firstName('123456'));            // logs 'foo'
console.log(fooBar.firstName('abc'));               // logs 'Invalid Password'
console.log(fooBar.displayName);                    // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));             // logs true
console.log(displayName === fooBar.displayName);    // logs false

// eslint-disable-next-line
let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('abc'));           // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));               // 'baz@qux.com' but should 'foo@bar.com'
