const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const matrix: string[][] = [];

// Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values

// carMakers.push(14);

// Help with map

carMakers.map((car: string) => {
  return car.toUpperCase();
});

// Flexible types

const newDates: (Date | string)[] = [new Date()];
newDates.push(new Date());
newDates.push('2021-10-10');

