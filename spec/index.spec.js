const { fuelRequirements } = require('../challenges');
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
