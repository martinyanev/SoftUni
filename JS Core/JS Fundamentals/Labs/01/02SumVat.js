function sumVat(a) {

    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    console.log(sum);
    console.log(sum * 0.2);
    console.log(sum * 1.2);
}