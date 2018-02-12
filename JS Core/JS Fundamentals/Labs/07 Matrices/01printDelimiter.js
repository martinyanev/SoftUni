function delimeter(input) {

    let result = [];
    for(let i = 0; i < input.length-1; i++){
        result.push(input[i]);
    }

    console.log(result.join(input[input.length-1]));
}

// delimeter(['One', 'Two', '-']);