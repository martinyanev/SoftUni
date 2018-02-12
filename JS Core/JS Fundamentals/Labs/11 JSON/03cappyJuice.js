function cappyJuice(input) {
    let result = {};

    for (let i = 0; i < input.length; i++){
        let juiceProperties = input[i].split(' => ');
        let juiceName = juiceProperties[0];
        let juiceQuantity = Number(juiceProperties[1]);

        if (!result.hasOwnProperty(juiceName)){
            result[juiceName] = juiceQuantity;
        } else {
            if (result[juiceName] >= 1000){
                result[juiceName] += juiceQuantity;
            } else {
                result[juiceName] += juiceQuantity;
                let temp = result[juiceName];
                if (result[juiceName] >= 100){
                    delete result[juiceName];
                    result[juiceName] = temp;
                }
            }

        }
    }

    for (let key in result){
        if (Math.floor(result[key] / 1000) > 0){
            console.log(key + ' => ' + Math.floor(result[key] / 1000));
        }
    }
}

cappyJuice(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
);