function solve(arr) {
    let sum = 0;
    for (const element of arr) {
        sum += Number(element);
    }

    console.log({sum});
}


solve(['2', '3', '4']);
solve(['1', '1', '322']);