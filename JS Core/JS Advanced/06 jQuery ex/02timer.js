function timer() {
    let secondsSpan = $('#seconds');
    let minutesSpan = $('#minutes');
    let hoursSpan = $('#hours');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let neshto;

    startBtn.on('click', function () {
        neshto = setInterval(step, 1000);
    });

    stopBtn.on('click', function () {
        clearInterval(neshto);
    });


    function step() {
        let seconds = Number(secondsSpan.text());
        // console.log(seconds);
        let minutes = Number(minutesSpan.text());
        let hours = Number(hoursSpan.text());
        seconds = seconds + 1;

        if (seconds === 60){
            seconds = 0;
            minutes = minutes + 1;
        }

        if (minutes === 60){
            hours = hours + 1;
            minutes = 0;
        }

        if (seconds < 10){
            seconds = '0' + seconds;
        }
        if (minutes < 10){
            minutes = '0' + minutes;
        }
        if (hours < 10){
            hours = '0' + hours;
        }

        $('#seconds').text(seconds);
        $('#minutes').text(minutes);
        $('#hours').text(hours);
    }
}


function timerM() {
    let ticking = false;
    let time, intervalID;
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let hours = $('#hours').val();
    let minutes = $('#minutes').val();
    let seconds = $('#seconds').val();

    startBtn.on('click', function() {
        //time = -1;
        //step();
        if(!ticking) {
            intervalID = setInterval(step, 1000);
            ticking = true;
        }
    });

    stopBtn.on('click', function() {
        clearInterval(intervalID);
        ticking = false;
    });
    function step() {

        seconds++;
        seconds %= 60;
        $("#seconds").text(("0" + Math.trunc(seconds % 60)).slice(-2));
        if (seconds == 0) {
            minutes++;
            minutes %= 60;
            $("#minutes").text(("0" + Math.trunc(minutes % 60)).slice(-2));
            if (minutes == 0) {
                hours++;
                hours %= 100;
                $("#hours").text(("0" + Math.trunc(hours % 100)).slice(-2));
            }
        }
    }
}