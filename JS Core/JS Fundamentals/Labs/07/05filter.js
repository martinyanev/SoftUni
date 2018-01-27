function filterInc(input) {

    let result = [];
    for (let i = 0; i < input.length; i++){
        if (result.length > 0){
            if (input[i] >= result[result.length-1]){
                result.push(input[i]);
            }
        } else {
            result.push(input[i]);
        }

    }

    for (let i = 0; i < result.length; i++){
        console.log(result[i]);
    }
    // console.log(result.join('\n'));
}

// filterInc([1, 5, 8, 9, 10, 3, 12, 7]);