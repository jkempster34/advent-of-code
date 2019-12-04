const fuelRequirements = fuelModulesArray => {
  return fuelModulesArray.reduce(
    (sum, individualModule) => sum + (Math.floor(individualModule / 3) - 2),
    0
  );
};

const fuelRequirementsWithAdditonalRequirements = fuelModulesArray => {
  return fuelModulesArray.reduce((sum, individualModule) => {
    let total = 0;
    while (individualModule > 0) {
      individualModule = Math.floor(individualModule / 3) - 2;
      if (individualModule > 0) total += individualModule;
    }
    return sum + total;
  }, 0);
};

const programAlarm = programInput => {
  result = [];
  for (let i = 0; i < programInput.length; i++) {
    if (result[i] === undefined) result[i] = programInput[i];
    if (programInput[i] === 1 && (i % 5 === 0 || i === 0)) {
      let sum =
        programInput[programInput[i + 1]] + programInput[programInput[i + 2]];
      result[programInput[i + 3]] = sum;
    } else if (programInput[i] === 2 && (i % 5 === 0 || i === 0)) {
      let product =
        programInput[programInput[i + 1]] * programInput[programInput[i + 2]];
      result[programInput[i + 3]] = product;
    } else if (programInput[i] == 99) break;
  }
  return result;
};

module.exports = {
  fuelRequirements,
  fuelRequirementsWithAdditonalRequirements,
  programAlarm
};
