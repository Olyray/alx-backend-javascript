const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment'); // Change the import to 5-payment.js
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to return the expected values
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    calculateNumberStub.withArgs('SUM', 10, 10).returns(20);

    // Create a spy to monitor console.log calls
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and the spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call sendPaymentRequestToApi with 100 and 20: log the correct message and call console.log once', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert the spy was called with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('should call sendPaymentRequestToApi with 10 and 10: log the correct message and call console.log once', () => {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Assert the spy was called with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
