class MyClass {
    constructor( myPassedValue ) {
      this.instanceProperty = myPassedValue;
    }
  }
  
  const myClassInstance = new MyClass( "A string." );
  console.log(myClassInstance.instanceProperty);
  console.log(myClassInstance);


  class MyClass2 {
    constructor( myPassedValue ) {
      this.instanceProp = myPassedValue;
    }
    myMethod() {
      console.log( this.instanceProp );
    }
  }
  
  const myClassInstance2 = new MyClass2( "A string." );
  console.log(myClassInstance2.instanceProp);
  myClassInstance2.myMethod();
  