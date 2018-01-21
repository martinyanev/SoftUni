function comp(arr) {
    let p = arr[0];
    let i = arr[1] / 100;
    let n = 12 /  arr[2];
    let t = arr[3];

    let res = p * Math.pow((1 + (i / n)), (n * t));


    // console.log(i);
    console.log(res.toFixed(2));
}

// comp([100000, 5, 12, 25]);