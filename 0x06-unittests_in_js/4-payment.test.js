const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment'); // Change the import to 4-payment.js
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to return a fixed number (10)
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy to monitor console.log calls
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and the spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments and log the correct message', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert the stub was called with the correct arguments
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));

    // Assert the spy was called with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));
  });
});
