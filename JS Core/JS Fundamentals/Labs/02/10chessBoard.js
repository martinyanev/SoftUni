function chessBoard(n) {
    let result = '<div class="chessboard">\n';
    for(let i = 1; i <= n; i++){
        let color = "";
        for(let j = 1; j <= n; j++){
            if (j === 1){
                result += "<div>\n";
            }
            if (i % 2 === 1){
                if (j % 2 === 1){
                    color = "black";
                } else {
                    color = "white";
                }
            } else {
                if (j % 2 === 1){
                    color = "white";
                } else {
                    color = "black";
                }
            }

            result += '<span class="' + color + '"></span>\n';
            if (j === n){
                result += "</div>\n";
            }
        }
    }
    result += "</div>";
    console.log(result);
}

// chessBoard(2);