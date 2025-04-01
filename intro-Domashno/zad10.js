function solve(arr) {
    let [radius, height] = arr;

    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;

    let l = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));

    let area = Math.PI * radius ** 2 + Math.PI * radius * l;

    console.log({area});
    console.log({volume});
}

solve([4, 6]);