function solve(a, b, c) {
    let s = (a + b + c) / 2;

    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(3);

    console.log({ s });
    console.log({ area });
}

solve(2, 3, 4);