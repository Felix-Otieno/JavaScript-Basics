const myObj = {};

Object.defineProperty(myObj, 'myProperty', {
  value: true,
  writable: false
});

console.log(myObj.myProperty);

myObj.myProperty = false;

myObj.myProperty;
