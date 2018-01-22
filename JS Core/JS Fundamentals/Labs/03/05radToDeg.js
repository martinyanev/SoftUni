function toRad(a) {

    let result = a * 0.9;

    if (result < 0 || result >= 360){
        if (result >= 360){
            while (result >= 360){
                result -= 360;
            }
        }

        if (result < 0){
            while (result < 0){
                result += 360;
            }
        }
    }
    console.log(result);
}
//
// toRad(100);


function gradsToDegree(grad){
    grad = Number(grad);
    grad = grad % 400;

    let convert = (grad / 10) * 9;

    if (convert < 0){
        convert = 360 + convert;
    }
    return convert;
}