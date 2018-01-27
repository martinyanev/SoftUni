function nthPrint(input) {
    // console.log(input[input.length - 1]);
    let are = Number.parseInt(input[input.length-1]);
    for (let i = 0; i < input.length-1; i += are){
        console.log(input[i]);
    }
}

// nthPrint([5, 20, 31, 4, 20, 2]);
// nthPrint(['dsa', 'asd', 'test', 'tset', 2]);