function create(sentences) {
    for (let sentence of sentences) {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.style.display = 'none';
        paragraph.textContent = sentence;
        div.appendChild(paragraph);
        document.getElementById('content').appendChild(div);
        div.addEventListener('click', clicked);

        function clicked() {
            // this.style.display = 'block';
            this.childNodes[0].style.display = 'block';
        }
    }
}