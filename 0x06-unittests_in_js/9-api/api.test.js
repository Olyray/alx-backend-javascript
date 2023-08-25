const request = require('request');
const { expect } = require('chai');

describe('API Index Page', () => {
  // Existing tests for the index page
});

describe('Cart Page', () => {
  it('should return correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return correct status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  // Add more tests if needed
});
