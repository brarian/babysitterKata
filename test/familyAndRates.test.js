const expect = require('chai').expect;
const main = require('../index');

//check that there's a valid object being passed in for the babysitter
// 1. needs to equal 11 hours, the total num the babysitter works for every family
// 2. check that the babysitter gets paid for every hours they work
// 3. check that there are no fractional hours
// 4. check that the structre being passed in is an object

describe('Family and rates', () => {
  //the babysitter can work no more than 11 hours 5pm - 4am
  it('family and rate objects {A, B, C} should all have keys that summed equal 11', () => {
    const totalHoursWorked = hours =>
      Object.keys(hours)
        .map(i => Number(i))
        .reduce((a, b) => a + b);

    expect(totalHoursWorked(main.A)).to.equal(11);
    expect(totalHoursWorked(main.B)).to.equal(11);
    expect(totalHoursWorked(main.C)).to.equal(11);
  });
});
