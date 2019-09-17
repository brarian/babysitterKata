const expect = require('chai').expect;
const main = require('../index');

//check to make sure that we get an array of keys from our object
describe('We can extract array of hours and price per hour from our family object', () => {
  //using array because we'll easily be able to loop through them and return key*value
  it('should return an array for the hours worked', () => {
    expect(main.keysOfObjects(main.A)).to.be.an('array');
    expect(main.keysOfObjects(main.C)).to.be.an('array');
  });

  it('should return an array for the price per hour', () => {
    expect(main.valuesOfObjects(main.B)).to.be.an('array');
    expect(main.valuesOfObjects(main.C)).to.be.an('array');
  });
});
