function moviePrices(arr) {
    let [movieTitle, day] = arr;

    movieTitle = movieTitle.toLowerCase();
    day = day.toLowerCase();
    let price = 2;
    // console.log(movieTitle);

    if (movieTitle === 'the godfather'){
        switch (day){
            case 'monday':
                price = 12;
                break;
            case 'tuesday':
                price = 10;
                break;
            case 'wednesday':
                price = 15;
                break;
            case 'thursday':
                price = 12.5;
                break;
            case 'friday':
                price = 15;
                break;
            case 'saturday':
                price = 25;
                break;
            case 'sunday':
                price = 30;
                break;
            default:
                console.log('error');
                return;
        }
    } else if (movieTitle === "schindler's list"){
        switch (day){
            case 'monday':
                price = 8.5;
                break;
            case 'tuesday':
                price = 8.5;
                break;
            case 'wednesday':
                price = 8.5;
                break;
            case 'thursday':
                price = 8.5;
                break;
            case 'friday':
                price = 8.5;
                break;
            case 'saturday':
                price = 15;
                break;
            case 'sunday':
                price = 15;
                break;
            default:
                console.log('error');
                return;
        }
    } else if (movieTitle === 'casablanca'){
        switch (day){
            case 'monday':
                price = 8;
                break;
            case 'tuesday':
                price = 8;
                break;
            case 'wednesday':
                price = 8;
                break;
            case 'thursday':
                price = 8;
                break;
            case 'friday':
                price = 8;
                break;
            case 'saturday':
                price = 10;
                break;
            case 'sunday':
                price = 10;
                break;
            default:
                console.log('error');
                return;
        }
    } else if (movieTitle === 'the wizard of oz'){
        switch (day){
            case 'monday':
                price = 10;
                break;
            case 'tuesday':
                price = 10;
                break;
            case 'wednesday':
                price = 10;
                break;
            case 'thursday':
                price = 10;
                break;
            case 'friday':
                price = 10;
                break;
            case 'saturday':
                price = 15;
                break;
            case 'sunday':
                price = 15;
                break;
            default:
                console.log('error');
                return;
        }
    } else {
        console.log('error');
    }

    console.log(price);
}

// moviePrices(['The Godfather', 'Thursday']);