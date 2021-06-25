// Type annotations
let apples: number = 10;

let speed: string = "fast";

let hasName: boolean = true;

let none: null = null;

let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

//Arrays
let colours: string[] = ["red", "green", "blue"];

let nos: number[] = [1, 2, 3];

//Classes

class Car {}

let car: Car = new Car();

//Object literals

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations
//1) Functions that return the 'any' type

const json = '{"x":10, "y":20}';
const coordinates: { x: number; y:number }  = JSON.parse(json);

//2) When we declare a variable and intialize later.

let words = ['red', 'green', 'blue'];
let find: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    find = true;
  }
}

//3) Variables whose type cannot be inferred correctly

let numbers = [-12, -8, 55];
let numAbvZero: boolean | number =  false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numAbvZero = numbers[i];
  }
}
