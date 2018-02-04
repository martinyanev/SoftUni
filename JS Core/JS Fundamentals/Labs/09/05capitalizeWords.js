function capitalizeWords(string) {
    let stringTokens = string.split(' ');
    let result = [];

    for (let i = 0; i < stringTokens.length; i++){
        result.push(stringTokens[i].charAt(0).toUpperCase());
        result[i] += stringTokens[i].substr(1).toLowerCase();
    }

    console.log(result.join(' '));
}