class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {

    constructor(color: string) {
        super(color);
    }

  private drive(): void {
    console.log("Now I can drive!!");
  }

  canDrive(): void {
    this.drive();
    this.honk();
    console.log(this.color);
  }
}

const car = new Car("green");
car.canDrive();
