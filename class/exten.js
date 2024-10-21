class MyClass {
    constructor( myPassedValue ) {
      this.instanceProp = myPassedValue;
    }
    classMethod() {
      console.log( `The value was '${ this.instanceProp }.'`)
    }
  }
  class ChildClass extends MyClass {
    classMethod() {
      console.log( `The value was '${ this.instanceProp },' and its type was '${ typeof this.instanceProp }.'`)
    }
  }
  
  const myParentClassInstance = new MyClass( "My string." );
  const mySubclassInstance = new ChildClass( 100 );
  
  myParentClassInstance.classMethod();
  mySubclassInstance.classMethod();
  