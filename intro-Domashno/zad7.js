function solve(arr) {
    let arrOfNums = [];
    for (const element of arr) {
        arrOfNums.push(Number(element));
    }

    let [x1, y1, x2, y2] = arrOfNums;

    let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    console.log({result});
}

solve(["2", "3", "4", "2"]);