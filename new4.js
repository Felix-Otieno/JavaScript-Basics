function MyFunction() {
    console.log( this  );
}
const myObject = new MyFunction();


myObject.MyFunction(); // Global `this` binding outside of strict mode is `globalThis`


(function() {
    "use strict";
    function MyFunction() {
            console.log( this );
    }
    MyFunction();  // Global `this` binding inside of strict mode is `undefined`
}());
