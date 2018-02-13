function sum() {
    let arr = document.querySelectorAll('td');
    let sum = 0;

    console.log(arr);
    for (let i = 1; i < arr.length-2; i += 2){
        sum += Number(arr[i].value);
    }
    document.getElementById('sum').value = sum;
}