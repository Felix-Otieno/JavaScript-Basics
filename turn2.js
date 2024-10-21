function myFunction( myString ) {
    if( typeof myString !== "string" ) {
     return false;
    }
    if( myString.length >= 5 ) {
     return true;
    } else {
     return false;
    }
 }
 
 console.log(myFunction( 100 ));
 
 
console.log(myFunction( "St" ));

 
 console.log(myFunction("String."));
 