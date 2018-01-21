function lastMonth(arr) {
    let day = arr[0];
    let month = arr[1];
    let year = arr[2];


    month--;

    if (month === 0){
        month = 12;
        year--;
    }

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        day = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11){
        day= 30;
    } else {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            day = 29;
        } else {
            day = 28;
        }
    }

    console.log(day);
}