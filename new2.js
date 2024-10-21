function MyFunction() {
    this.myProperty = true;
  }
  const myObject = new MyFunction();
  
  console.log(myObject.myProperty);
