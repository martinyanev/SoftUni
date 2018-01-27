function rotateArray(input) {

    let poped = Number.parseInt(input.pop());
    console.log(arrRotate(input, poped).join(' '));

    function arrRotate(arr, n) {
        let L = arr.length;
        return arr.slice(L - n).concat(arr.slice(0, L - n));
    }
}

// rotateArray()