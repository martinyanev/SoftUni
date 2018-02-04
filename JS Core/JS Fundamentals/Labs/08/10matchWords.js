function matchAllWords(input){
    let text = input.match(/\w+/g);
    console.log(text.join('|'));
}