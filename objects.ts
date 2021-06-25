const profile = {
  name: "John",
  age: 20,
  coords: {
    lat: 0.23,
    lon: 0.55,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const { coords: { lat, lon } } : { coords: { lat: number; lon: number }} = profile;