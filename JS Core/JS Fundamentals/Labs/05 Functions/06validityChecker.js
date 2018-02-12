function valChecker(arrPoints) {
    let [x1, y1, x2, y2] = arrPoints;
// && distance(x1, y1, 0, 0) >= 0
//     console.log(distance(x1, y1, 0, 0));
    if (Number.isInteger(distance(x1, y1, 0, 0))){
        console.log('{'+ x1 + ', ' + y1 + '} to {0, 0} is valid');
    } else {
        console.log('{'+ x1 + ', ' + y1 + '} to {0, 0} is invalid');
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))){
        console.log('{'+ x2 + ', ' + y2 + '} to {0, 0} is valid');
    } else {
        console.log('{'+ x2 + ', ' + y2 + '} to {0, 0} is invalid');
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))){
        console.log('{'+ x1 + ', ' + y1 + '} to ' + '{'+ x2 + ', ' + y2 + '} is valid');
    } else {
        console.log('{'+ x1 + ', ' + y1 + '} to ' + '{'+ x2 + ', ' + y2 + '} is invalid');
    }

    function distance(a, b, c, d) {
        // let d = Math.sqrt(Math.pow((b - a), 2) + Math.pow((d - c), 2));
        return Math.sqrt(Math.pow((c - a), 2) + Math.pow((d - b), 2));
    }
}

// valChecker([2, 1, 1, 1]);