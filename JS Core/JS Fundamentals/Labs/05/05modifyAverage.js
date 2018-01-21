function modifyAverage(num) {
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

modifyAverage(11);