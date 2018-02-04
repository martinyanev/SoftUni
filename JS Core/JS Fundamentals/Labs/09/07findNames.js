function variableNameInSentence(input) {
    let text=String(input);
    let regex=/\b_([A-Za-z0-9]*)\b/g;
    let numbers=text.match(regex);
    let extracted=numbers.join(',');
    let newNums="";
    for (let i = 0; i < extracted.length; i++) {
        if(extracted[i]!='_'){
            newNums+=extracted[i];
        }
    }
    console.log(newNums);
}