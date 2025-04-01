function solve(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

solve(2025);
solve(2024);
solve(2023);