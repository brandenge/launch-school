function logInBox(message, maxLength) {
  const messageLines = wordWrap(message, maxLength);
  const maxLineLength = Math.max(...messageLines.map(line => line.length));

  const horizontalLine = `+${'-'.repeat(maxLineLength + 2)}+`;
  const emptyLine = `|${' '.repeat(maxLineLength + 2)}|`;

  console.log(horizontalLine);
  console.log(emptyLine);
  for (let messageLine of messageLines) {
    console.log(`| ${alignText(messageLine, maxLineLength)} |`);
  }
  console.log(emptyLine);
  console.log(horizontalLine);
}

function alignText(message, length) {
  if (message.length > length) return message.slice(0, length);
  message = message.padEnd(length, ' ');
  return message;
}

function wordWrap(message, maxLength = Infinity) {
  const words = message.split(' ');
  const lines = [];
  let line = '';
  for (let word of words) {
    if (line.length + word.length < maxLength) {
      line = line + ' ' + word;
    } else {
      if (maxLength < Infinity) line = line.padEnd(maxLength, ' ');
      lines.push(line);
      line = '';
    }
  }
  if (maxLength < Infinity) line = line.padEnd(maxLength, ' ');
  lines.push(line);
  return lines;
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

logInBox(lorem, 75);

/*
+---------------------------------------------+
|                                             |
|  To boldly go where no one has gone before. |
|                                             |
+---------------------------------------------+
+---+
|   |
|   |
|   |
+---+
+-----------------------------------------------------------------------------+
|                                                                             |
|  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod    |
|  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis |
|  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis |
|  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu      |
|  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in    |
|  qui officia deserunt mollit anim id est laborum.                           |
|                                                                             |
+-----------------------------------------------------------------------------+
*/
