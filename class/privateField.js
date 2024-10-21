class Person {
    // Private field
    #age;
  
    constructor(name, age) {
      this.name = name;
      this.#age = age; // Initialize private field
    }
  
    // Public method to access private field
    getAge() {
      return this.#age;
    }
  }
  
  const person = new Person('Alice', 30);
  console.log(person.name); // "Alice"
  console.log(person.getAge()); // 30
//   console.log(person.#age); // Error: Private field '#age' must be declared in an enclosing class

  
  class Car {
    #startEngine() {
      console.log('Engine started');
    }
  
    drive() {
      this.#startEngine(); // Access private method within the class
      console.log('Driving...');
    }
  }
  
  const car = new Car();
  car.drive(); // "Engine started" "Driving..."
  car.#startEngine(); // Error: Private method '#startEngine' is not accessible outside class
  