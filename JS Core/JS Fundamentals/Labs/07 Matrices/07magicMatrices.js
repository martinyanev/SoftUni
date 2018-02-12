function magicMarices(input) {

    let rowSum = sumRow(input[0]);
    let colSum = sumColumn(input, 0);

    for (let i = 1; i < input.length; i++){
        if (rowSum !== sumRow(input[i])){
            return false;
        }
    }

    for (let i = 1; i < input[0].length; i++){
        if (colSum !== sumColumn(input, i)){
            return false;
        }
    }

    return true;

    function sumRow(row) {
        let sum = 0;
        for (let i = 0; i < row.length; i++){
            sum += row[i];
        }

        return sum;
    }

    function sumColumn(matrix, col) {
        let sum = 0;

        for(let i = 0; i < matrix.length; i++){
            sum += matrix[i][col];
        }

        return sum;
    }
}