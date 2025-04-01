function checkNumber(input) {
    if (!Number.isInteger(input)) {
        return "invalid"
    }

    if (input % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(checkNumber(3))
console.log(checkNumber(4))
console.log(checkNumber(7.7))
