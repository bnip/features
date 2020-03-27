class Vehicle2 {
  // Child classes can call this method but not from outside the child class or superclass
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle2 {
  private drive(): void {
    console.log('vroom');
  }

  // Since this method is within the class it can call the private method
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle2();

const car = new Car();
car.startDrivingProcess();
