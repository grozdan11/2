function solve(sentance) {
    console.log(sentance.toUpperCase().match(/\w+/g).join(", "));  
}

solve('Hi, how are you?')