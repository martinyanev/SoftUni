function extractUniqueWords(input) {
    let regex = /[a-zA-Z0-9]+/g;
    let result = [];

    // for (let i = 0; i < input.length; i++){
    //     console.log(input);
    // }

    for (let string of input){
        let words = string.match(regex);
        // console.log(string);
        for(let word of words){
            if(result.indexOf(word.toLowerCase()) === -1){
                result.push(word.toLowerCase());
            }
        }
    }


    console.log(result.join(', '));
}

extractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui. ', 'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. ']);