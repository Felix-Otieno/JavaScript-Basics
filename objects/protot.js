// Create a prototype object
const person = {
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Create a new object that inherits from 'person'
  const student = Object.create(person);
  student.name = 'Felix Otieno';
  student.age = 25;
  
  // student can access the greet method from 'person' prototype
  student.greet(); // Output: Hello, my name is Felix Otieno

  // Constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Add a method to Animal's prototype
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
  };
  
  // Create a new instance of Animal
  const dog = new Animal('Rover');
  dog.speak(); // Output: Rover makes a noise.
  