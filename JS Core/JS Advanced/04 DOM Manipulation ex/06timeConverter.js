function attachEventsListeners() {
    let arr = {
        day: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    
    let daybtn = document.getElementById('daysBtn');
    let hoursbtn = document.getElementById('hoursBtn');
    let minutesbtn = document.getElementById('minutesBtn');
    let secondsbtn = document.getElementById('secondsBtn');
    
    daybtn.addEventListener('click', function () {
        let days = document.getElementById('days').value;

        document.getElementById('hours').value = Number(days) * arr['hours'];
        document.getElementById('minutes').value = Number(days) * arr['minutes'];
        document.getElementById('seconds').value = Number(days) * arr['seconds'];
    });

    hoursbtn.addEventListener('click', function () {
        let hours = document.getElementById('hours').value;

        document.getElementById('days').value = Number(hours) / arr['hours'];
        document.getElementById('minutes').value = Number(hours) * 60;
        document.getElementById('seconds').value = Number(hours) * 60 * 60;
    });

    minutesbtn.addEventListener('click', function () {
        let minutes = document.getElementById('minutes').value;

        document.getElementById('days').value = Number(minutes) / arr['minutes'];
        document.getElementById('hours').value = Number(minutes) / 60;
        document.getElementById('seconds').value = Number(minutes) * 60;
    });

    secondsbtn.addEventListener('click', function () {
        let seconds = document.getElementById('seconds').value;

        document.getElementById('days').value = Number(seconds) / arr['seconds'];
        document.getElementById('hours').value = Number(seconds) / (60 * 60);
        document.getElementById('minutes').value = Number(seconds) / 60;
    });

}