function myFunction() {
    console.log( this );
}
myFunction();

(function() {
    console.log( this );
}());
