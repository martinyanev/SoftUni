function colNums(n) {
    let result = "<ul>\n";
    for(let i = 1; i <= n; i++){
        if(i % 2 === 1){
            result += "<li><span style='color: green'>" + i + "</span></li>\n";
        } else {
            result += "<li><span style='color: blue'>" + i + "</span></li>\n";
        }
    }
    result += "</ul>";
    console.log(result);
}