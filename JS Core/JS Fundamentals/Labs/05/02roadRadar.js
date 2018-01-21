function roadRadar(arr) {
    let [speed, area] = arr;

    let speedLimit = 0;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    if (speed <= speedLimit){

    } else if (speed - speedLimit <= 20){
        console.log('speeding');
    } else if (speed - speedLimit <= 40){
        console.log('excessive speeding');
    } else {
        console.log('reckless driving');
    }
}

// roadRadar([120, 'interstate']);