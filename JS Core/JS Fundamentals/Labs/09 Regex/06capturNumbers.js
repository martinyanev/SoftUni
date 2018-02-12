function captureNum(input) {
    let result = [];
    let regex = /[0-9]+/g;
    let text = '';

    for(let i = 0; i < input.length; i++){
        let currentSentence = input[i];
        text += currentSentence;
        let match = regex.exec(text);

        while (match){
            result.push(match[0]);
            match = regex.exec(text);
        }
    }

    console.log(result.join(' '));
}

function captureNum2(input) {
    let text = input.join(' ');
    let regex = /[0-9]+/g;
    let numbers = text.match(regex);
    console.log(numbers.join(' '));
}