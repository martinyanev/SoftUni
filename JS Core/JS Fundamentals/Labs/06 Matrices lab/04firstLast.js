function firstLast(input) {
    let k = input[0];

    let line1 = '';
    let line2 = '';

    for (let i = 1; i <= k; i++){
        line1 += input[i] + ' ';
    }

    for (let i = input.length - k; i < input.length; i++){
        line2 += input[i] + ' ';
    }

    console.log(line1);
    console.log(line2);
}