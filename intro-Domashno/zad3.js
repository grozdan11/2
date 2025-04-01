function solve(arr) {
    let counter = 0;
    let [string, letter] = arr;

    for (const element of string) {
        if (element == letter) {
            counter++;
        }
    }

    console.log({counter});
}

solve(['hello', 'l']);
solve(['Bulgaria', 'a']);
