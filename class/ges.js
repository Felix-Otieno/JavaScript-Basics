class MyClass {
    constructor( originalValue ) {
        this.totalValue = 0;
    }
    set doubleThisValue( newValue ) {
        this.totalValue = newValue * 2;
    }
    get currentValue() {
        console.log( `The current value is: ${ this.totalValue }` );
    }
}
const myClassInstance = new MyClass();

myClassInstance;

myClassInstance.doubleThisValue = 20;
console.log(myClassInstance.doubleThisValue);
console.log(myClassInstance.currentValue);
