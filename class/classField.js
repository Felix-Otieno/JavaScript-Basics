// Defining a class
class Car {
    // Class field (property)
    constructor(brand, model, year) {
      this.brand = brand;  // brand is a field
      this.model = model;  // model is a field
      this.year = year;    // year is a field
    }
  
    // Class method
    start() {
      console.log(`${this.brand} ${this.model} is starting...`);
    }
  
    // Another class method
    info() {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  
    // Static method (can be called without instantiating the class)
    static compareAge(car1, car2) {
      return car1.year > car2.year ? car1 : car2;
    }
  }
  
  // Creating instances of the class
  const car1 = new Car("Toyota", "Corolla", 2010);
  const car2 = new Car("Honda", "Civic", 2015);
  
  // Accessing class fields
  console.log(car1.brand);  // Output: Toyota
  console.log(car2.model);  // Output: Civic
  
  // Calling class methods
  car1.start();  // Output: Toyota Corolla is starting...
  console.log(car2.info()); // Output: Honda Civic (2015)
  
  // Calling static method
  const newerCar = Car.compareAge(car1, car2);
  console.log(`The newer car is: ${newerCar.info()}`); // Output: The newer car is: Honda Civic (2015)
  