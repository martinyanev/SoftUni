function countdown(sec) {
    let time = sec;
    let box = document.getElementById('time');
    let intervalID = setInterval(decrement, 1000);

    function decrement() {
        time--;
        let min = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10){
            seconds = '0' + seconds;
        }
        box.value = min + ':' + seconds
        // console.log(min + ' : ' + seconds);
    }
    // setInterval(
    //     function () {
    //         let min = Math.floor(sec / 60);
    //         let seconds = sec % 60;
    //
    //         if (seconds < 10){
    //             seconds = '0' + seconds;
    //         }
    //         sec--;
    //
    // }, 1000);
    // console.log(min);
    // console.log(seconds);
}

countdown(600);