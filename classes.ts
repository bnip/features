class Vehicle2 {
  constructor(public color: string) {}

  // Child classes can call this method but not from outside the child class or superclass
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle2 {
  // public keyword was not put on color because we do not want to resign it from vehicle
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  // Since this method is within the class it can call the private method
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle2();
// console.log(vehicle.color);

const car = new Car(4, 'red');
car.startDrivingProcess();
