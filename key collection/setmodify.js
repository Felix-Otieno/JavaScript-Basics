const mySet = new Set();

mySet.add( "My value." );
console.log(mySet);

mySet.has( "My value." );
console.log(mySet);

mySet.delete( "My value." );
console.log(mySet);

const mySet2 = new Set([ 1, 2, 3 ]);
console.log(mySet2);
mySet.add(2);
console.log(mySet2);
