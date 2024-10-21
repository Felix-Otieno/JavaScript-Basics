const myFunction = function( myParameter ) {
    if( myParameter === undefined ) {
     return "This is the result.";
    }
    return "This is the alternate result.";
 }
 
 console.log(myFunction());
 
 console.log(myFunction("true"));
 