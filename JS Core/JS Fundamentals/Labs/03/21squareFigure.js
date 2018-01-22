function figureSquare(n) {
    // First line
    let result = '+';

    let afa = n-2;

    for (let i = 0; i < afa; i++){
        result += '-';
    }

    result += '+';

    for (let i = 0; i < afa; i++){
        result += '-';
    }

    result += '+\n';

    // End first line

    let az = Math.floor((n - 3) / 2);
    for (let i = 0; i < az; i++){
        for (let k = 0; k < 2; k++){
            result += '|';
            for (let j = 0; j < n - 2; i++){
                result += ' ';
            }
        }
        result += '|\n';
    }


    // Middle
    result += '+';

    for (let i = 0; i < n-2; i++){
        result += '-';
    }

    result += '+';

    for (let i = 0; i < n-2; i++){
        result += '-';
    }

    result += '+\n';
    // END MIDDLE

    // SECOND
    for (let i = 0; i < az; i++){
        for (let k = 0; k < 2; k++){
            result += '|';
            for (let j = 0; j < n - 2; i++){
                result += ' ';
            }
        }
        result += '|\n';
    }


    // Middle
    result += '+';

    for (let i = 0; i < n-2; i++){
        result += '-';
    }

    result += '+';

    for (let i = 0; i < n-2; i++){
        result += '-';
    }

    result += '+\n';
    // END MIDDLE

    console.log(result);

}

// figureSquare(4);


function figureOf4Squares(num) {
    // num=num.map(Number);

    if(num===2) {
        console.log('+++');
        return;
    }
    console.log(`+`+`-`.repeat(num-2)+`+`+`-`.repeat(num-2)+`+`);


    if(num>4) {
        if (num % 2 === 0) {
            for (let i = 0; i < (num - 4)/2; i++) {
                console.log((`|`+` `.repeat(num-2)+`|`+` `.repeat(num-2)+`|`));
            }
        }
        else if (num % 2 === 1) {
            for (let i = 0; i < (num - 3)/2; i++) {
                console.log((`|`+` `.repeat(num-2)+`|`+` `.repeat(num-2)+`|`));
            }
        }
    }
    console.log(`+`+`-`.repeat(num-2)+`+`+`-`.repeat(num-2)+`+`);
    if(num>4) {
        if (num % 2 === 0) {
            for (let i = 0; i < (num - 4)/2; i++) {
                console.log((`|`+` `.repeat(num-2)+`|`+` `.repeat(num-2)+`|`));
            }
        }
        else if (num % 2 === 1) {
            for (let i = 0; i < (num - 3)/2; i++) {
                console.log((`|`+` `.repeat(num-2)+`|`+` `.repeat(num-2)+`|`));
            }
        }
    }
    console.log(`+`+`-`.repeat(num-2)+`+`+`-`.repeat(num-2)+`+`);
}