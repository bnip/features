class Vehicle2 {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle2();
vehicle.drive();
vehicle.honk();
