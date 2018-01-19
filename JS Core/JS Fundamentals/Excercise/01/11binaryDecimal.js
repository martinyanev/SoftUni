function toDecimal(bin) {

    let power = 0;
    let result = 0;
    for(let i = bin.length-1; i >= 0; i--){

        if (bin.charAt(i) == 1){
            // console.log(power);
            // console.log(Math.pow(2, power));
            result += Math.pow(2, power);
        }

        power++;
    }

    console.log(result);
}

// toDecimal("00001001");