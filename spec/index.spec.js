const {
  fuelRequirements,
  fuelRequirementsWithAdditonalRequirements
} = require('../challenges');
const { expect } = require('chai');
const { fuelRequirementsInput } = require('./data');

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
    console.log(
      fuelRequirementsWithAdditonalRequirements(fuelRequirementsInput)
    );
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
