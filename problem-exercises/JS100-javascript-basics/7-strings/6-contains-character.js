let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));
console.log(/x/.test(byteSequence));
console.log(!!byteSequence.indexOf('x'));
console.log(!!byteSequence.lastIndexOf('x'));
console.log(!!byteSequence.match(/x/));
console.log(!!byteSequence.matchAll(/x/g));
console.log(!!byteSequence.search(/x/));
