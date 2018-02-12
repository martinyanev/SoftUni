function equalNeighbors(matrix) {
    // let a = [[20, 40, 50], [10 JSON lab, 60]];

    let pair = 0;
    for (let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if (i > 0){
                if (matrix[i][j] === matrix[i-1][j]){
                    pair++;
                }
            }
            if (j > 0){
                if (matrix[i][j] === matrix[i][j-1]){
                    pair++;
                }
            }
            if (i < matrix.length - 1){
                if (matrix[i][j] === matrix[i+1][j]){
                    pair++;
                }
            }
            if (j < matrix.length - 1){
                if (matrix[i][j] === matrix[i][j+1]){
                    pair++;
                }
            }
        }
    }

    console.log(pair / 2);
}

// equalNeighbors(
//     [['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
// );