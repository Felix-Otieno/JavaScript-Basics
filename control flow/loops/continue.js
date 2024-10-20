let total = 100;
let results = 0;

while (results < total) {
    if (results === 50) {
        results += 5; // Increment before continue
        continue;
    }
    console.log(results);
    results += 5;
}
