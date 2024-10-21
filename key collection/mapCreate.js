const newMap = new Map();
console.log(newMap);
console.log(typeof(newMap));


const myMap = new Map([
    [ "myKey", "A string value" ],
    [ "mySecondKey", 500 ],
    [ "myThirdKey", true ]
]);
console.log(myMap);
console.log(typeof(myMap));


const myMap2 = new Map();
myMap2.set( "myKey", "A string value" );
console.log(myMap2);