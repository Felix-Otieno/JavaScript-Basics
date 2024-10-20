const myIterable = [ 1, 2, 3 ];
const myIterator = myIterable[ Symbol.iterator ]();
console.log(myIterator);