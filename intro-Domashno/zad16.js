function solve(arr) {
    let operator = arr.pop();
    let [numOne, numTwo] = arr.map(Number);

    if (operator == "*") {
        console.log(numOne * numTwo);
    } else if (operator == "+") {
        console.log(numOne + numTwo);
    } else if (operator == "-") {
        console.log(numOne - numTwo);
    } else if (operator == "/") {
        console.log(numOne / numTwo);
    } else {
        console.log("Invalid operator");   
    }

}

solve(["2", "3", "*"]);
solve(["18", "-1", "*"]);
solve(["14", "-4", "-"]);