function extract(content) {
    let contenta = document.getElementById(content).textContent;
    // let contenta = 'Rakiya (Bulgarian brandy) is home-made liquor\n' +
        // '(alcoholic drink). It can be made of grapes, plums or\n' +
        // 'other fruits (even apples).';
    let regex = /\(([^)]+)\)/g;

    let result = [];
    let match = regex.exec(contenta);

    while (match){
        result.push(match[1]);
        match = regex.exec(contenta)
    }

    return result.join('; ');
}

extract('asd');