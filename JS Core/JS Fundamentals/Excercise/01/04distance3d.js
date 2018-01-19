function distance(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let z1 = arr[2];
    let x2 = arr[3];
    let y2 = arr[4];
    let z2 = arr[5];

    let x = Math.pow((x1-x2), 2);
    let y = Math.pow((y1-y2), 2);
    let z = Math.pow((z1-z2), 2);
    console.log(Math.sqrt(x + y + z));
}