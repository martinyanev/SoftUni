function letter(a, b) {
    let sp = a.split('');
    let sum = 0;
    for (let i = 0; i < sp.length; i++){
        if (sp[i] === b){
            sum++;
        }
    }
    return sum;
}

// console.log(letter('panther', 'n'));