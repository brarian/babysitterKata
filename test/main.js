const expect = require('chai').expect;
const main = require('../index');

//at this point we've validated that the object recieved from helper methods are arrays
// multiply keys and values to return the sum of hours and rates

describe('The main function to calculate nightly rates', () => {
  //using array because we'll easily be able to loop through them and return key*value
  it('should return a number greater than 0', () => {
    let testArray = { 1: 15, 6: 10, 4: 20 };
    let testArrayResult = main.nightlyRate(testArray);
    expect(testArrayResult).to.be.greaterThan(0);
    expect(testArrayResult).to.be.an('number');
  });
});
