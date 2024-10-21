class MyClass {
    constructor( myPassedValue ) {
      this.instanceProp = myPassedValue;
    }
    classMethod() {
      console.log( `The value was '${ this.instanceProp }.'`)
    }
  }
  
  class ChildClass extends MyClass {
      constructor( myPassedValue ) {
          super( myPassedValue );
          this.modifiedProp = myPassedValue + 50;
      }
      subclassMethod() {
          super.classMethod();
          console.log( `The value type was '${ typeof this.instanceProp }.'`)
      }
  }
  
  const mySubclassInstance = new ChildClass( 100 );
  mySubclassInstance.subclassMethod();
