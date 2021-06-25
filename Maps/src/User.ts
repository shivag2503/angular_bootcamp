import faker from "faker";
import{ Mappable } from './CustomMap'

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
        lat: parseFloat(faker.address.latitude()),
        lon: parseFloat(faker.address.longitude())
    };
  }
    color: string = 'red';
    

  markableContent(): string {
      return `<div>
      <h1>User name is ${this.name}<h1>
      </div>`;
  }
  
}
