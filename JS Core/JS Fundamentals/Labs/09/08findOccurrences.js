function findOccurrences(string, searched) {
    let regex = new RegExp('\\b' + searched + '\\b', 'gi');

    let result = string.match(regex);
    if (result!= null)
        console.log(result.length);
    else
        console.log(0);
}

// findOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
