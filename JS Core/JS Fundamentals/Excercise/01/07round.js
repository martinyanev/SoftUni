function round(arr) {
    let a = arr[0];
    let b = arr[1];

    let f = 1;
    for(let i = 0; i < b ; i++){
        f *= 10;
    }

    if ((a * f) % 10 !== 0){
        a = a.toFixed(b);
    }

    // let res = parseFloat(c);
    console.log(a);
}