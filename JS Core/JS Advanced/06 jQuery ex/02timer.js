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