function calcAggregates(arr) {
    let max = reduce(arr, (a,b) => Math.max(a, b));

    return max;
    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }
}