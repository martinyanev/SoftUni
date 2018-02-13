function colorize() {
    let rows = document.querySelectorAll('table tr');

    // for (let i = 1; i < rows.length; i++){
    //     if (i % 2 !== 0){
    //         rows[i].style.backgroundColor = 'Teal'
    //     }
    // }

    let index = 0;

    for (let row of rows){
        index++;

        if (index % 2 === 0){
            row.style.backgroundColor = 'Teal';
        }
    }
}