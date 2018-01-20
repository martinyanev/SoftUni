function multiplicaitonTable(n) {
    let result = '<table border="1">\n';

    for (let i = 0; i <= n; i++){
        result += '<tr>';
        for (let j = 0; j <= n; j++){
            if (i === 0){
                if (j === 0){
                    result += '<th>x</th>';
                } else {
                    result += '<th>' + j + '</th>';
                }
            } else {
                if (j === 0){
                    result += '<th>' + i + '</th>';
                } else {
                    result += '<td>' + (i * j) + '</td>';
                }
            }
        }
        result += '</tr>\n';
    }
    result += '</table>';
    console.log(result);
}

// multiplicaitonTable(5);