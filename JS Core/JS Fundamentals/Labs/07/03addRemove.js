function addRemove(input) {
    let result = [];
    let counter = 1;

    for (let i = 0; i < input.length; i++){
        if (input[i] === 'add'){
            result.push(counter);
            counter++;
        } else if (input[i] === 'remove'){
            result.pop();
            counter++;
        }
    }

    if (result.length > 0){
        for (let i = 0; i < result.length; i++){
            console.log(result[i]);
        }
    } else {
        console.log('Empty');
    }

}