function solve(arr) {
    let sum = 0;

    for (const element of arr) {
        sum += Number(element);
    }

    console.log({sum});

    let vat = sum * 0.2;
    console.log({vat});
    
    let total = sum + vat;
    console.log({total});
    
}

solve(['25']);