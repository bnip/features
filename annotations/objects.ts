const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  // Example of function being defined in an object with the function annotation on it
  setAge(age: number): void {
    this.age = age;
  }
};

// If you want to use destructuring you must write out the expected structure of profile
// Profile expects to have a structure that is an object who has a property age, which is of type number
const { age }: { age: number } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
