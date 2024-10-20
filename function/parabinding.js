function myOuterFunction() {
    let myInnerArrowFunction = ( ...myParams ) => {
        console.log( myParams[ 0 ] );
    }
    myInnerArrowFunction( true );
};

myOuterFunction( false );


let myArrowFunction = ( ...myParams ) => {
    console.log( myParams[ 0 ] );
};

myArrowFunction( true );
