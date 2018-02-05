function JSONTable(input) {
    let result = '<table>\n';

    for (let i = 0; i < input.length; i++){
        let object = JSON.parse(input[i]);

        result += '     <tr>\n';

        result += '        <td>' + object.name + '</td>\n';
        result += '        <td>' + object.position + '</td>\n';
        result += '        <td>' + object.salary + '</td>\n';

        result += '    <tr>\n';

    }

    result += '</table>';
    console.log(result);
}

JSONTable(['{"name":"Pesho","position":"Promenliva","salary":100000}']);