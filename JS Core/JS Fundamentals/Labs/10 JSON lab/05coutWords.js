function countsWords(input) {
    let regex = /[a-zA-Z0-9_]+/g;
    let result = {};
    let words = input.match(regex);

    for (let word of words){
        if (!result.hasOwnProperty(word)) {
            result[word] = 0;
        }
        result[word]++;
    }
    console.log(JSON.stringify(result));
}

countsWords("Far too slow, you're far too slow.");

function countWords([arr]) {
    let wordsCount={};
    let regex=/[a-zA-Z0-9_]+/g;
    let words=arr.match(regex);
    for(let word of words){
        if(!wordsCount.hasOwnProperty(word)){
            wordsCount[word]=0;
        }
        wordsCount[word]++;
    }
    return JSON.stringify(wordsCount);
}