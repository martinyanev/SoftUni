function startWithString(string, check) {
    let checkStr = string.substr(0, check.length);

    if (check === checkStr){
        console.log('true');
    } else {
        console.log('false');
    }
}