function calculateSumAndVAT(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(`Sum: ${sum.toFixed(2)}`);
    console.log(`VAT: ${vat.toFixed(2)}`);
    console.log(`Total: ${total.toFixed(2)}`);
}
calculateSumAndVAT(['4', '2.5', '1.6'])
calculateSumAndVAT(['6', '1.5', '4.4', '1.32', '7.2'])
calculateSumAndVAT(['7', '3.45', '5.07', '6', '3.54'])
