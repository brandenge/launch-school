let PerfectNumber = require('../6-perfect-number.js');

describe("PerfectNumber", () => {
  test("negative raises error", () => {
    // eslint-disable-next-line
    expect(() => { PerfectNumber.classify(-1) }).toThrow();
  });

  test("classify deficient", () => {
    expect(PerfectNumber.classify(13)).toEqual('deficient');
  });

  test("classify perfect", () => {
    expect(PerfectNumber.classify(28)).toEqual('perfect');
  });

  test("classify abundant", () => {
    expect(PerfectNumber.classify(12)).toEqual('abundant');
  });
});
