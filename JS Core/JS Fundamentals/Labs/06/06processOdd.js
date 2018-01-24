function processOdd(input) {
    let result = [];
    for (let i = 0; i < input.length; i++){

        if (i % 2 === 1){
            let doubled = input[i] * 2;
            result.push(doubled);
        }
    }

    result = result.reverse();
    console.log(result.join(' '));
}