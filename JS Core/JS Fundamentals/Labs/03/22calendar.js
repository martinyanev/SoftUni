function calendar(today, thisMonth, thisYear) {
    let leapYear = false;

    if ((thisYear % 4 === 0 && thisYear % 100 !== 0) || thisYear % 400 === 0){
        leapYear = true;
    }

    let dayWeekToday = new Date("'" + thisYear + "-" + thisMonth + "-" + today + "'").getDay();

    let dayWeekFirst = new Date("'" + thisYear + "-" + thisMonth + "-1'").getDay();

    // GET last days from previous month
    let previousMonth = thisMonth - 1;
    let previousYear = thisYear;
    if (previousMonth === 0){
        previousMonth = 12;
        previousYear--;
    }
    let lastPreviousDay = 31;

    if (previousMonth === 4 || previousMonth === 6 || previousMonth === 9 || previousMonth === 11){
        lastPreviousDay = 30;
    }

    if (previousMonth === 2){
        if (leapYear){
            lastPreviousDay = 29;
        } else {
            lastPreviousDay = 28;
        }
    }

    // GET last days from previous month
    let lastDayThisMonth = 31;

    if (thisMonth === 4 || thisMonth === 6 || thisMonth === 9 || thisMonth === 11){
        lastDayThisMonth = 30;
    }

    if (thisMonth === 2){
        if (leapYear){
            lastDayThisMonth = 29;
        } else {
            lastDayThisMonth = 28;
        }
    }


    // console.log(lastPreviousDay);

    let result = '<table>\n';

    // Create the first row on the calendar
    result += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    let lastPrintedDay = 0;

    for (let i = 0; i < 6; i++){
        let endOfThisMonth = false;
        result += '  <tr>';
        if (i === 0){
            for (let j = dayWeekFirst - 1; j >= 0; j--){
                result += '<td class="prev-month">' + (lastPreviousDay - j) + '</td>';
            }
            for (let j = dayWeekFirst; j < 7; j++){
                if (lastPrintedDay + 1 !== today){
                    result += '<td>' + ++lastPrintedDay + '</td>';
                } else {
                    result += '<td class="today">' + ++lastPrintedDay + '</td>';
                }
            }
        } else {
            let lastWeekDay = 0;
            for (let j = 0; j < 7; j++){
                if (lastPrintedDay === lastDayThisMonth){
                    endOfThisMonth = true;
                    lastWeekDay = j-1;
                    break;
                }

                if (lastPrintedDay + 1 !== today){
                    result += '<td>' + ++lastPrintedDay + '</td>';
                } else {
                    result += '<td class="today">' + ++lastPrintedDay + '</td>';
                }
            }
            // Start to print next year
            if (endOfThisMonth){
                let nextMonthDay = 1;
                for (let i = lastWeekDay; i < 6; i++){
                    result += '<td class="next-month">' + nextMonthDay + '</td>';
                    nextMonthDay++;
                }

                result += '</tr>\n';
                result += '</table>\n';
                console.log(result);
                return;
            }
        }
        result += '</tr>\n';
    }
    result += '</table>\n';
    console.log(result);
}

calendar(1, 1, 1900);