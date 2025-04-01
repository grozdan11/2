function calculate([a, b, operator]) {
    let num1 = Number(a)
    let num2 = Number(b)

    let result

    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            console.log("Invalid operator")
            return
    }

    console.log(result)
}
calculate(['20', '-11', '*'])
calculate(['1', '10', '+'])
calculate(['6', '7', '/'])
calculate(['3', '5', '-'])
calculate(['test', '-4', 'text'])

