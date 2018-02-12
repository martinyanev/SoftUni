function dnaHelix(num) {
    let letters = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let currentLetter = 0;

    for (let i = 0; i < num; i++){
        let line = '';
        if (i % 4 === 0){
            line += '**';
            line += letters[currentLetter % 10];
            currentLetter++;
            line += letters[currentLetter % 10];
            currentLetter++;
            line += '**';
        }

        if (i % 4 === 1 || i % 4 === 3){
            line += '*';
            line += letters[currentLetter % 10];
            currentLetter++;
            line += '--';
            line += letters[currentLetter % 10];
            currentLetter++;
            line += '*';
        }

        if (i % 4 === 2){
            line += letters[currentLetter % 10];
            currentLetter++;
            line += '----';
            line += letters[currentLetter % 10];
            currentLetter++;
        }
        console.log(line);
    }
}

// dnaHelix(10 JSON lab);