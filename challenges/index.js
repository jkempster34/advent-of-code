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
  return programInput;
};

module.exports = {
  fuelRequirements,
  fuelRequirementsWithAdditonalRequirements,
  programAlarm
};
