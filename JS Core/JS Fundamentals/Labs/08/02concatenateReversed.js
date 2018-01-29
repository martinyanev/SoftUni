function concatenateReversed(input) {
    let result = '';

    for (let i = input.length - 1; i >= 0; i--){
        let string = input[i];
        let arrString = string.split('');
        let reversedStringArray = arrString.reverse();
        result += reversedStringArray.join('');
    }
    console.log(result);
}