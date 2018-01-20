function quadraticEquation(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    // console.log('d: ' + discriminant);
    if (discriminant > 0){
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        // let ads = -b;
        // console.log('-b: ' + ads);
        // console.log('x1: ' + x1);
        // console.log('x2: ' + x2);

        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (discriminant === 0) {
        let x = (-b - Math.sqrt(discriminant)) / (2 * a);

        // console.log("x: " + x);
        console.log(x);
    } else {
        console.log('No');
    }
}

// quadraticEquation(6, 11, -35);