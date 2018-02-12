function posNeg(input) {
    let negative = [];
    let positive = [];
    let zero = [];

    for (let i = 0; i < input.length; i++){
        if (input[i] < 0){
            negative.push(input[i]);
        } else if (input[i] > 0) {
            positive.push(input[i]);
        } else {
            zero.push(input[i]);
        }
    }

    negative = negative.sort(function(a, b){return b-a});
    for (let i = 0; i < negative.length; i++){
        console.log(negative[i]);
    }
    positive.sort(function(a, b){return b-a});
    for (let i = 0; i < positive.length; i++){
        console.log(positive[i]);
    }
}

function negPosNumb(arr) {
    arr = arr.map(Number);
    let result = [];

    for (num of arr) {
        if (num <0) {
            result.unshift(num);
        }
        else {
            result.push(num);
        }
    }
    console.log(result.join(' '));
}