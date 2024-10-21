let myObject = {
    myMethod() { console.log( this ); },
    myArrowFunction: () => console.log( this ),
    myEnclosingMethod: function () {
        this.myArrowFunction = () => { console.log(this) };
    }
};

myObject.myMethod();


myObject.myArrowFunction();
