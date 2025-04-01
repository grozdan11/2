function solve(num) {
    if (num <= 1) console.log("No");
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log("No");
      }
    }
    console.log("Yes");
}

solve(2);
solve(3);
solve(4);
solve(5);