function wordsUppercase(input) {

    let start = 0;
    input = input.toUpperCase();

    let taken = false;
    let count = 0;
    let arrResult = [];
    for (let i = 0; i < input.length; i++){
        // console.log(input.charCodeAt(i));
        if (input.charCodeAt(i) < 65 || input.charCodeAt(i) > 90 || i === input.length - 1){
            if (i === input.length - 1 && input.charCodeAt(i) > 65 && input.charCodeAt(i) < 90){
                count++;
            }
            if (!taken){
                let str = input.substr(start, count);
                arrResult.push(str);
                taken = true;
                count = 0
            }
            start = i + 1;
            count = 0;
        } else {
            taken = false;
            count++;
        }
    }

    console.log(arrResult.join(', '));
}

// wordsUppercase('hello');