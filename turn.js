function addition(a, b) {
    let sum = a + b;
    console.log("This is before return statement");
    return sum;
    console.log("This is after return statement");
}

let result = addition(10, 40);
console.log(result);
console.log("Outside the function");