const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    // Create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert the spy was called with the correct arguments
    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));

    // Restore the spy
    calculateNumberSpy.restore();
  });
});
