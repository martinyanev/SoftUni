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