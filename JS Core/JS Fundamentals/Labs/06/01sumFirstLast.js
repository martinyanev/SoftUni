function sumFirstLast(input) {
    let sum = 0;
    sum += Number.parseInt(input[0]);
    sum += Number.parseInt(input[input.length - 1]);

    console.log(sum);
}

// sumFirstLast([])