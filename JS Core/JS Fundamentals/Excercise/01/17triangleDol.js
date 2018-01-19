function triangleDolalrs(n) {
    let something = '';
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            something += '$';
        }
        console.log(something);
        something = '';
    }
}