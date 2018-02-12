function lastKNumbers(n, k) {

    let result = [1];

    for (let counter = 1; counter < n; counter++){
        result.push(sumSomeIndexesBehind(counter, k, result));
    }

    console.log(result.join(' '));
    function sumSomeIndexesBehind(num, numBeh, arr) {
        let sum = 0;
        for (let i = num - numBeh; i < arr.length; i++){
            if (i < 0){
                i = 0;
            }
            sum += arr[i];
        }
        return sum;
    }
}

// lastKNumbers(6, 3);

function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = sumSomeIndexesBehind(start, end, seq);

        seq[current] = sum;
    }
    console.log(seq.join(' '));

    function sumSomeIndexesBehind(start, end, seq) {
        let sum = 0;
        for (let i = start; i <= end; i++){
            sum += seq[i];
        }
        return sum;
    }
}

sumLastKNumbersSequence(6, 3);