function popFromArray(arr) {
    let numbers = [];

    for (let i = 0; i < arr.length; i++){
        numbers.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++){
        console.log(numbers.pop());
    }
}

function printArr(arr) {
    console.log(arr.join(', '));
}

// popFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// printArr([1, 2, 3, 4, 5, 6]);

let num = 1.1023;

console.log(Number.parseFloat(num.toFixed(2)));

let winner = [1, 2, 4, 5, 6, 3];

if (winner[0] < 5){
    winner.delete();
}

console.log(winner);