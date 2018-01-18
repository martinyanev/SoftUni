function isPrime(num) {
    if (num === 0 || num === 1){
        console.log("false");
        return;
    }

    if (num > 0){
        for(let i = 2, s = Math.sqrt(num); i <= s; i++){
            if(num % i === 0){
                console.log("false");
                return;
            }
        }
        console.log("true");
    } else {
        console.log("false");
    }

}

// isPrime(-5);