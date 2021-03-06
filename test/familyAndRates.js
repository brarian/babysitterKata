const expect = require('chai').expect;
const main = require('../index');

//check that there's a valid object being passed in for the babysitter
// 1. needs to equal 11 hours, the total num the babysitter works for every family
// 2. check that the babysitter gets paid for every hours they work
// 3. check that there are no fractional hours
// 4. check that the structure being passed in is an object

describe('Family and rates', () => {
  //I go about this problem presuming that an object will always be passed in to represent the pay structure
  it('should return a typeof "object" for every const passed in', () => {
    let dataype = typeof main.A;
    expect(dataype).to.equal('object');
  });

  //the babysitter can work no more than 11 hours 5pm - 4am
  it('family and rate objects {A, B, C} should all have keys whose sum is equal to 11', () => {
    const totalHoursWorked = hours =>
      Object.keys(hours)
        .map(i => Number(i))
        .reduce((a, b) => a + b);

    expect(totalHoursWorked(main.A)).to.equal(11);
    expect(totalHoursWorked(main.B)).to.equal(11);
    expect(totalHoursWorked(main.C)).to.equal(11);
  });

  //the babysitter needs to be paid for every hour they work
  it('should check that the babysitter is getting paid every hour', () => {
    //check to ensure there is no rate that is 0 or lower for the hours worked
    // test should fail if there is a rate of 0 for period of time the babysitter gets paid
    const paidEveryHour = family =>
      Object.keys(family).filter(i => family[i] <= 0 || null).length;
    expect(paidEveryHour(main.A)).to.equal(0);
    expect(paidEveryHour(main.B)).to.equal(0);
    expect(paidEveryHour(main.C)).to.equal(0);
  });
});
