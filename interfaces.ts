interface Description {
  summary(): string;
}

const oldCivic = {
  name: "XYZ",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink contains ${this.sugar} grams of sugar`;
  },
};

const printSummary = (vehicle: Description): void => {
  console.log(vehicle.summary());
};

printSummary(oldCivic);
printSummary(drink);
