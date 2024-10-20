const myMap = new Map([
    ['myKey', true],
    ['mySecondKey', false ],
  ]);
  myMap.forEach( ( myValue, myKey, originalMap ) => {
      console.log( myValue, myKey, originalMap  );
  });
  