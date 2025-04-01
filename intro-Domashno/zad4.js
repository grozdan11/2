function sove([w, h, W, H]) {
    let areaOne = Number(w) * Number(h);
    let areTwo = Number(W) * Number(H);

    let commonArea = Math.min(Number(w), Number(W)) * Math.min(Number(h), Number(H));

    let area = areaOne + areTwo - commonArea;
    console.log(area);
}

solve(['2', '4', '5', '3']);