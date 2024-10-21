const myArray = [1, 2, 3];
console.log(...myArray);


const myArray2 = [ 4, 5, 6 ];
const mySecondArray = [1, 2, 3, ...myArray2];
console.log(mySecondArray);

const myArray3 = [ 1, 2, 3 ];
const spreadArray = [...myArray];
console.log(spreadArray);

const myArray4 = [1, 2, 3];
const mySecondArray2 = [4, 5, 6];
const myNewArray = [...myArray4, ...mySecondArray2];
console.log(myNewArray);

const myArray5 = [ true, false ];
const myFunction = ( myArgument, mySecondArgument ) => {
    console.log( myArgument, mySecondArgument );
};

myFunction(...myArray5);
