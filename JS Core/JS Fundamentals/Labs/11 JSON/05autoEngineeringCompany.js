function autoCompany(input) {
    let result = new Map;
    for (let i = 0; i < input.length; i++){
        let carTokens = input[i].split(' | ');
        let carBrand = carTokens[0];
        let carModel = carTokens[1];
        let producedCars = Number(carTokens[2]);

        if (!result.has(carBrand)){
            result.set(carBrand, []);
        }

        let arrayOfObjects = result.get(carBrand);
        let hasModel = false;
        for (let carModelofObj of arrayOfObjects){
            // console.log(carModelofObj);
            if (carModelofObj.carModel === carModel){
                hasModel = true;
                let newProducedCars = carModelofObj.producedCars + producedCars;
                let foundedModel = result.get(carBrand).find(function (result) {
                    return result.carModel === carModel;
                });
                // console.log(foundedModel);
                foundedModel.producedCars += producedCars;
                // console.log(foundedModel);
                break;
            }
        }

        if (!hasModel){
            result.get(carBrand).push({carModel: carModel, producedCars: producedCars});
        }
    }

    let resultCategories = [...result.keys()];
    for (let carBrand of resultCategories) {
        console.log(carBrand);
        let models = result.get(carBrand);
        // console.log(models);
        models.forEach(p => console.log(`###${p.carModel} -> ${p.producedCars}`));
    }
}

autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Audi | Q6 | 100'
]);