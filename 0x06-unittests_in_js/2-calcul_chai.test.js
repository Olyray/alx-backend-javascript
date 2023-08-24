const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should round up and add two numbers when type is SUM', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('should round up and substract two numbers when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should round up and divide two numbers when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
