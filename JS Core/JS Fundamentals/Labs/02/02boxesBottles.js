function boxesBottles(a, b) {
    if (a % b === 0){
        console.log(a / b);
    } else {
        console.log(Math.floor(a / b) + 1);
    }
}