function modifyAveragee(num) {
    console.log(calculateAverage(num));
    while (calculateAverage(num) < 5){
        num = '' + num + '9';
    }

    console.log(num);

    function calculateAverage(num) {
        num = num.toString();
        let sum = 0;
        for (let i = 0; i < num.length; i++){
            // console.log(Number.parseInt(num.charAt(i)));
            let curNum = Number.parseInt(num.charAt(i));
            sum += curNum;
        }
        return sum / num.length;
    }
}

// modifyAveragee(11 JSON);

function modifyAverage(input) {
    let num = input.toString();
    let sum = 0;
    while (true) {
        for (let i = 0; i < num.length; i++) {
            let element = Number(num[i]);
            // console.log(element);
            sum += element;
        }
        if (sum / (num.length) > 5) {
            console.log(num);
            break;
        }
        else {
            num += 9;
        }
        sum = 0;
    }
    // console.log(num);
}