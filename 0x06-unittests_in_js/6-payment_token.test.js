const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct object when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      assert.deepStrictEqual(result, { data: 'Successful response from the API' });
      done(); // Call done to signal test completion
    }).catch((error) => {
      done(error); // Call done with an error if something goes wrong
    });
  });

  // Add more tests if needed
});
