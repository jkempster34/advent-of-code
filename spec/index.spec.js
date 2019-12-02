const { fuelRequirements } = require('../challenges');
const { expect } = require('chai');

describe('Day 1: The Tyranny of the Rocket Equation', () => {
  const input = [
    61302,
    105953,
    129165,
    121039,
    64799,
    120172,
    147328,
    65147,
    123112,
    103573,
    85213,
    130378,
    115416,
    129131,
    88809,
    147043,
    86119,
    138383,
    136803,
    66719,
    59465,
    122491,
    126551,
    110028,
    96959,
    115214,
    83823,
    109324,
    148671,
    70505,
    96375,
    83861,
    62724,
    77493,
    122275,
    112894,
    143872,
    93525,
    50526,
    140725,
    147110,
    115859,
    137582,
    143800,
    68830,
    130259,
    122393,
    64373,
    51810,
    62449,
    143889,
    108038,
    55083,
    59927,
    77613,
    67488,
    91711,
    67498,
    147320,
    65348,
    101088,
    51983,
    97705,
    61890,
    74561,
    128456,
    76450,
    95132,
    78835,
    142148,
    128037,
    71497,
    138382,
    143474,
    54236,
    104095,
    121533,
    136757,
    123213,
    66306,
    83269,
    90894,
    82215,
    143024,
    117140,
    128722,
    139823,
    87177,
    58107,
    94303,
    70008,
    130633,
    114210,
    67931,
    59062,
    125819,
    127278,
    118718,
    70968,
    66126
  ];
  it('returns a number', () => {
    expect(fuelRequirements(input)).to.be.a('number');
  });
  it('returns the correct number for one input', () => {
    expect(fuelRequirements([12])).to.equal(2);
  });
  it('returns the correct number for multiple inputs', () => {
    expect(fuelRequirements([12, 1969])).to.equal(656);
  });
});
