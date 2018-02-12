function extractLinks(arr) {
    let pattern = /(www\.)([a-zA-Z0-9-]+)(\.[a-z]+)+/g;
    let print = String(arr).match(pattern);
    if(print!=null)
        console.log(print.join('\n'));
}