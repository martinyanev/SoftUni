function bitcoin(input) {

    let oneBitcoin = 11949.16;
    let oneGramGold = 67.51;
    let totalLevs = 0;
    let boughtBitcoins = 0;
    let fistBitcoinDay = 0;

    for (let i = 1; i <= input.length; i++){
        let currentDayGrams = Number(input[i-1]);
        if (i % 3 === 0){
            currentDayGrams = currentDayGrams - (currentDayGrams * 0.3);
        }
        totalLevs += currentDayGrams * oneGramGold;

        while (totalLevs >= oneBitcoin){
            totalLevs -= oneBitcoin;
            boughtBitcoins++;
            if (boughtBitcoins === 1){
                fistBitcoinDay = i;
            }
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (fistBitcoinDay > 0){
        console.log(`Day of the first purchased bitcoin: ${fistBitcoinDay}`);
    }
    totalLevs = totalLevs.toFixed(2);
    console.log(`Left money: ${totalLevs} lv.`);
}

/*
TESTS
 */
// bitcoin([100, 200, 300]);
bitcoin([50, 100]);
// bitcoin([3124.15, 504.212, 2511.124]);