function cityMarkets(input) {
    let result = new Map;

    for (let i = 0; i < input.length; i++){
        let [town, product, sales] = input[i].split(' -> ');
        let [amountOfSales, priceForOneUnit] = sales.split(' : ');
        amountOfSales = Number(amountOfSales);
        priceForOneUnit = Number(priceForOneUnit);

        if (!result.has(town)){
            result.set(town, new Map);
        }

        if (!result.get(town).has(product)){
            result.get(town).set(product, 0);
        }

        result.get(town).set(product, result.get(town).get(product) + (amountOfSales * priceForOneUnit));
        // result.set(town, result.get(town) + population);
    }

    result.forEach(function(value, key) {
        console.log('Town - ' + key);

        value.forEach(function (value1, key1) {
            console.log('$$$' + key1 + ' : ' + value1);
        })
    });
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Montana -> Portokals -> 200000 : 1']);