function biggest3(arr) {
    if (arr[0] > arr[1]){
        if (arr[0] > arr[2]){
            console.log(arr[0]);
        } else {
            console.log(arr[2]);
        }
    } else {
        if (arr[1] > arr[2]){
            console.log(arr[1]);
        } else {
            console.log(arr[2]);
        }
    }
}