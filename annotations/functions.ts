const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// Function keyword
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous functions assigned to variable
const multiply = function(a: number, b: number): number {
  return a * b;
};

// Void can still return null or undefined
const logger = (message: string): void => {
  console.log(message);
};

// Never going to execute function completely (rare)
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// Destructuring with Annotations
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// ES2015
const logweather = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
