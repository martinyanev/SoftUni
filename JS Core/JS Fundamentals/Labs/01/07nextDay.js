function nextDay(y, m, d) {
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        if (d === 31) {
            d = 1;
            m++;
        } else {
            d++;
        }
    } else if (m === 2) {
        if (y % 4 === 0){
            if (d === 29) {
                d = 1;
                m++;
            }  else {
                d++;
            }
        } else {
            if (d === 28) {
                d = 1;
                m++;
            }  else {
                d++;
            }
        }

    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        if (d === 30) {
            d = 1;
            m++;
        } else {
            d++;
        }
    } else {
        d++;
    }

    if (d === 1 && m === 1){
        y++;
    }

    if (y === 1){
        y = 1901;
    }
    let output = "";
    output = y + "-" + m + "-" + d;
    return output;
}

// console.log(nextDay(2016, 9, 30));