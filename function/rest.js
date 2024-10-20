function myFunction( mySeparator, ...myStrings ) {
    console.log( myStrings.join( mySeparator ) );
  };
  
  myFunction( " - ", "My first string", "My second string", "my third string" );
  