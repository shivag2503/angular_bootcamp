import faker from "faker";
import{ Mappable } from './CustomMap'


export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    };
  }
    color: string = "Green";

  markableContent(): string {
    return `<div>
    <h1>Company name is ${this.companyName}</h1>
    <h3>Catch Phase is ${this.catchPhrase}</h3>
    </div>`;
  }
}
