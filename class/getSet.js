class MyClass {
    constructor(originalValue) {
        this.totalValue = originalValue || 0;  // Initialize totalValue with originalValue or 0 if not provided
    }

    // Setter for doubling the value
    set doubleThisValue(newValue) {
        this.totalValue = newValue * 2;
    }

    // Getter for current value
    get currentValue() {
        return `The current value is: ${this.totalValue}`;
    }
}

// Creating an instance of MyClass
const myClassInstance = new MyClass();

// Setting a new value using the setter
myClassInstance.doubleThisValue = 5; // Sets totalValue to 10 (5 * 2)

// Logging the current total value
console.log(myClassInstance.totalValue); // Output: 10

// Accessing the getter (no need for another console.log inside)
console.log(myClassInstance.currentValue); // Output: The current value is: 10
