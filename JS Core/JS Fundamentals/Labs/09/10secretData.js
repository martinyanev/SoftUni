function encrypt(arr) {

    let patterns = {
        namePattern: /(\*[A-Z][A-Za-z]*)(?= |\t|$)/g,
        phonePattern: /(\+[0-9-]{10})(?= |\t|$)/g,
        idPattern: /(![A-Za-z0-9]+)(?= |\t|$)/g,
        basePattern: /(_[A-Za-z0-9]+)(?= |\t|$)/g
    };
    let output = ''
    for (let str of arr) {
        for (let pattern of Object.values(patterns)) {
            let match
            while (match = pattern.exec(str)) {
                str = str.replace(match[0], '|'.repeat(match[0].length))

            }
        }
        output += str + '\n'
    }
    return output
}

function test(input) {
    let regex = /(\*[A-Z][A-Za-z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![A-Za-z0-9]+)(?= |\t|$)|(_[A-Za-z0-9]+)(?= |\t|$)/g

    return input
        .forEach(l => console.log(l
            .replace(
                regex,
                (m) => '|'.repeat(m.length))));
}