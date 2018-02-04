function endstWithString(string, check) {
    let checkStr = string.substr(string.length - check.length);

    if (check === checkStr){
        console.log('true');
    } else {
        console.log('false');
    }
}