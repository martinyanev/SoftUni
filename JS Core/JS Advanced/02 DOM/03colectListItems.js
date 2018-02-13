function extractText() {
    let items = document.querySelectorAll('#items li');

    // console.log(items);
    for (let i = 0; i < items.length; i++){
        document.getElementById('result').value += items[i].textContent + '\n';
    }
}