const fuelRequirements = fuelModulesArray => {
  return fuelModulesArray.reduce(
    (sum, individualModule) => sum + (Math.floor(individualModule / 3) - 2),
    0
  );
};

module.exports = { fuelRequirements };
