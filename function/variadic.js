function myFunction() {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + " - ";
    }
    console.log( result );
};

myFunction( "My first string", "My second string", "my third string" );
