function calculateDistance([V1, V2, T]) {
    let timeInHours = T / 3600.00;
    let s1 = V1 * timeInHours;
    let s2 = V2 * timeInHours;
    let distanceKM = Math.abs(s1 - s2);
    let distanceM = distanceKM * 1000;
    console.log(distanceM);
}
calculateDistance([55, 33, 2200])
calculateDistance([30,20,8100])
