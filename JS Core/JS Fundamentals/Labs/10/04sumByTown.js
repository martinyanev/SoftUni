function sumOfTowns(arr) {
    let totalIncome = {};
    for (let i = 0; i < arr.length; i += 2) {
        let [town, income] = arr.slice(i, i + 2);

        if (!totalIncome.hasOwnProperty(town)) {
            totalIncome[town] = 0;
        }
        totalIncome[town] += Number(income);
    }
    return JSON.stringify(totalIncome);
}

// sumByTown(['Sofia', 20, 'Varna', 3, 'Sofia', 5, 'Varna', 4]);