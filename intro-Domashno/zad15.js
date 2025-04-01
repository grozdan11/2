function solve(arr) {
    let [numOne, numTwo, numThree] = arr.map(Number);

    if (numOne > numTwo && numOne > numThree) {
        console.log(numOne);
    } else if (numTwo > numOne && numTwo > numThree) {
        console.log(numTwo);
    } else {
        console.log(numThree);
    }
    
}

solve(["2", "3", "4"]);
solve(["5", "3", "4"]);
solve(["2", "7", "4"]);