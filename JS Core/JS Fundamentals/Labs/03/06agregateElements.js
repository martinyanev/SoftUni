function agElm(arr) {

    let sum = 0;
    let invValue = 0;
    let concat = '';

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        invValue += 1/arr[i];
        concat += arr[i];
    }

    console.log(sum);
    console.log(invValue);
    console.log(concat);
}