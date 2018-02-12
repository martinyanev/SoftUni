function radioCrystals(arr) {
    let target = arr[0];

    for(let i = 1; i < arr.length; i++){
        let current = arr[i];

        console.log('Processing chunk ' + current + ' microns');

        let cut = 0;
        while (current / 4 >= target){
            cut++;
            current /= 4;
        }

        if (cut > 0){
            console.log('Cut x' + cut);
            Math.floor(current);
            console.log('Transporting and washing');
        }

        let lap = 0;
        while (current * 0.8 >= target){
            lap++;
            current *= 0.8;
        }

        if (lap > 0){
            console.log('Lap x' + lap);
            Math.floor(current);
            console.log('Transporting and washing');
        }

        let grind = 0;
        while (current - 20 >= target){
            grind++;
            current -= 20;
        }

        if (grind > 0){
            console.log('Grind x' + grind);
            Math.floor(current);
            console.log('Transporting and washing');
        }

        let etch = 0;
        while (current - 2 >= target - 1){
            etch++;
            current -= 2;
        }

        if (etch > 0){
            console.log('Etch x' + etch);
            Math.floor(current);
            console.log('Transporting and washing');
        }

        if (current === target - 1){
            console.log('X-ray x1');
            current++;
        }

        if (current === target){
            console.log('Finished crystal ' + target + ' microns');
        }
    }

}

// radioCrystals([1000, 4000, 8100]);