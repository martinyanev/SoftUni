function airPolution(arr, words) {
    let matrix = createMatrix(arr);
    let polutedAreas = [];
    for (let i = 0; i < words.length; i++){
        let commandWithNumTokens = words[i].split(' ');
        let command = commandWithNumTokens[0];
        let num = Number(commandWithNumTokens[1]);

        switch (command){
            case 'breeze':
                breeze(num);
                break;
            case 'gale':
                gale(num);
                break;
            case 'smog':
                smog(num);
                break;
        }
    }

    findingPolutetPlaces(matrix);


    function createMatrix(arr) {
        let matrix = [];
        for (let i = 0; i < arr.length; i++){
            let tokens = arr[i].split(' ');
            matrix[i] = [];
            for (let j = 0; j < tokens.length; j++){
                matrix[i].push(Number(tokens[j]));
            }
        }
        return matrix;
    }

    function breeze(num) {
        // console.log(num);
        // console.log(matrix[num][0]);
        for (let i = 0; i < matrix[num].length; i++){
            matrix[num][i] -= 15;
            if (matrix[num][i] < 0){
                matrix[num][i] = 0;
            }
        }
    }

    function gale(num) {
        for (let i = 0; i < matrix.length; i++){
            matrix[i][num] -= 20;
            if (matrix[i][num] < 0){
                matrix[i][num] = 0;
            }
        }
    }

    function smog(num) {
        for (let i = 0; i < matrix.length; i++){
            for (let j = 0; j < matrix[i].length; j++){
                matrix[i][j] += num;
            }
        }
    }

    function findingPolutetPlaces(matrix) {
        for (let i = 0; i < matrix.length; i++){
            for (let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] >= 50){
                    polutedAreas.push(`[${i}-${j}]`);
                }
            }
        }
    }

    if (polutedAreas.length > 0){
        console.log('Polluted areas: ' + polutedAreas.join(', '));
    } else {
        console.log('No polluted areas');
    }
    // console.log(matrix);
}

/*
TESTS
 */

airPolution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
// airPolution([
//         "5 7 3 28 32",
//         "41 12 49 30 33",
//         "3 16 20 42 12",
//         "2 20 10 39 14",
//         "7 34 4 27 24",
//     ],
//     [
//         "smog 11", "gale 3",
//         "breeze 1", "smog 2"
//     ]
// );
// airPolution([
//         "5 7 2 14 4",
//         "21 14 2 5 3",
//         "3 16 7 42 12",
//         "2 20 8 39 14",
//         "7 34 1 10 24",
//     ],
//     ["breeze 1", "gale 2", "smog 35"]
// );