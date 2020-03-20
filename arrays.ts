// Whenever you need to initialize an empty array we will use type annotation
const carMakersEmpty: string[] = [];

const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
// Type script will give us autocomplete on the variable being passed into the function
carMakers.map((car: string): string => {
  // You can see autocomplete after car of all the methods that belong to the type string
  return car.toUpperCase();
});

// Flexible types
// You can use the pipe operator to tell typescript that this array will take a Date or a string
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100);
