function popTowns(input) {
    let result = new Map;
    for (let i = 0; i < input.length; i++){
        let tokens = input[i].split(' <-> ');
        let town = tokens[0];
        let population = tokens[1];
        population = Number(population);

        if (!result.has(town)){
            result.set(town, 0);
        }

        result.set(town, result.get(town) + population);

    }

    result.forEach(function(value, key) {
        console.log(key + ' : ' + value);
    });
}

popTowns(['Sofia <-> 1200000', 'Montana <-> 20000']);