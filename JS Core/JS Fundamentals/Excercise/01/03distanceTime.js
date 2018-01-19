function distance(arr) {
    let v1 = arr[0];
    let v2 = arr[1];
    let time = arr[2] / 3600;

    let s1 = v1 * time * 1000;
    let s2 = v2 * time * 1000;

    console.log(Math.abs(s1 - s2));
}

// distance(0, 60, 3600);