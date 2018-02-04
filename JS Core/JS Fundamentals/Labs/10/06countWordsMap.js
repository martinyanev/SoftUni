function countWordsWithMaps([text]) {
    let wordsCount = new Map;
    let words = text.match(/[A-Za-z0-9_]+/g);
    for (let word of words) {
        let lowerCasedWord = word.toLowerCase();
        if (!wordsCount.has(lowerCasedWord))
            wordsCount.set(lowerCasedWord, 0);
        wordsCount.set(lowerCasedWord, wordsCount.get(lowerCasedWord) + 1);
    }

    let keys = [...wordsCount.keys()].sort();

    return keys.map(k => `'${k}' -> ${wordsCount.get(k)} times`).join('\n');
}
console.log(countWordsWithMaps(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']));