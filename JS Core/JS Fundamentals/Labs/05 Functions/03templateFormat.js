function templateFormat(arr) {

    let result = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < arr.length; i += 2){
        result += '  <question>\n    ';
        result += arr[i];
        result += "\n  </question>\n";
        result += '  <answer>\n    ' + arr[i+1] + '\n  </answer>\n';
    }
    result += '</quiz>';

    console.log(result);
}