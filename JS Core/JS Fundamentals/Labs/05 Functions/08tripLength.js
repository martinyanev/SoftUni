function tripLength(arr) {
    let [x1, y1, x2, y2, x3, y3] = arr;

    let from1To2 = distance(x1, y1, x2, y2);
    let from2To3 = distance(x2, y2, x3, y3);
    let from1To3 = distance(x1, y1, x3, y3);

    // There are 3 different ways

    let dis123 = from1To2 + from2To3;
    let dis132 = from1To3 + from2To3;
    let dis213 = from1To2 + from1To3;

    if (dis123 <= dis132){
        console.log('1->2->3: ' + dis123);
    } else if (dis132 <= dis213){
        console.log('1->3->2: ' + dis132);
    } else {
        console.log('2->1->3: ' + dis213);
    }

    function distance(a, b, c, d) {
        // let d = Math.sqrt(Math.pow((b - a), 2) + Math.pow((d - c), 2));
        return Math.sqrt(Math.pow((c - a), 2) + Math.pow((d - b), 2));
    }
}

// tripLength([0, 0, 2, 0, 4, 0]);
// tripLength([5, 1, 1, 1, 5, 4]);