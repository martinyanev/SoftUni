function addItem() {
    let item = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value = '';

}