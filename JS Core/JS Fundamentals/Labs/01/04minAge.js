function minAge(a, b, c, d, e) {
    let minAge = a;

    let obj1 = {
        'name': b,
        'age': c
    };

    let obj2 = {
        'name': d,
        'age': e
    };

    if (obj1['age'] >= minAge){
        console.log(obj1);
    }

    if (obj2['age'] >= minAge){
        console.log(obj2);
    }
}

// console.log(minAge(12, 'Ivan', 15, 'Asen', 9));