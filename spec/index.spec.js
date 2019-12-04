const {
  fuelRequirements,
  fuelRequirementsWithAdditonalRequirements,
  programAlarm
} = require('../challenges');
const { expect } = require('chai');
const { fuelRequirementsInput, programAlarmInput } = require('./data');

describe('Day 1: The Tyranny of the Rocket Equation', () => {
  it('returns a number', () => {
    expect(fuelRequirements(fuelRequirementsInput)).to.be.a('number');
  });
  it('returns the correct number for one input', () => {
    expect(fuelRequirements([12])).to.equal(2);
  });
  it('returns the correct number for multiple inputs', () => {
    expect(fuelRequirements([12, 1969])).to.equal(656);
  });
});

describe('Day 1: The Tyranny of the Rocket Equation. Part Two', () => {
  it('returns a number', () => {
    expect(
      fuelRequirementsWithAdditonalRequirements(fuelRequirementsInput)
    ).to.be.a('number');
  });
  it('returns the correct number for one input where the result rounded down is 0', () => {
    expect(fuelRequirementsWithAdditonalRequirements([14])).to.equal(2);
  });
  it('returns the correct number for one input where the result rounded down is more than 0', () => {
    expect(fuelRequirementsWithAdditonalRequirements([1969])).to.equal(966);
  });
  it('returns the correct number for multiple inputs where the results of these inputs rounded down is more than 0', () => {
    expect(fuelRequirementsWithAdditonalRequirements([1969, 100756])).to.equal(
      51312
    );
  });
});

describe('Day 2: 1202 Program Alarm', () => {
  it('returns an array', () => {
    expect(programAlarm(programAlarmInput)).to.be.an('array');
  });
  it('breaks out of the program if it hit 99', () => {
    expect(programAlarm([1, 0, 0, 0, 99, 1, 0, 0, 99])).to.have.lengthOf(5);
  });
  it('returns the correct result for one section of code which begins with 1', () => {
    expect(programAlarm([1, 0, 0, 0, 99])).to.eql([2, 0, 0, 0, 99]);
  });
  it('returns the correct result for one section of code which begins with 2', () => {
    expect(programAlarm([2, 3, 0, 3, 99])).to.eql([2, 3, 0, 6, 99]);
  });
  it('returns the correct result multiple sections of code', () => {
    expect(programAlarm([1, 1, 1, 4, 99, 5, 6, 0, 99])).to.eql([
      30,
      1,
      1,
      4,
      2,
      5,
      6,
      0,
      99
    ]);
  });
  it('does not modify the input array', () => {
    expect(programAlarm(programAlarmInput)).to.be.an('array');
  });
});
