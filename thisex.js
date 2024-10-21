let myObject = {
    myValue:"This sis a string",
    myDetails: function() {
        console.log(this.myValue)
    }
}
myObject.myDetails()

let myObject2 = {
    myValue: "This is my string.",
    myMethod() {
            console.log( this.myValue );
    }
};

myObject2.myMethod();
