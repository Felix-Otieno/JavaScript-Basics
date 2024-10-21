function myFunction( ...myParameters ) {
    let result = 0;
    myParameters.forEach( ( myParam ) => {
        result += myParam;
    });
    return result;
};

console.log(myFunction( 2, 2 ));
console.log(myFunction( 1, 1, 1, 10, 5 ));
console.log(myFunction( 10, 11, 25 ));
