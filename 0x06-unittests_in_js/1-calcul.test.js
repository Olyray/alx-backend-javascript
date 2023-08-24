const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should round up and add two numbers when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('should round up and substract two numbers when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should round up and divide two numbers when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
