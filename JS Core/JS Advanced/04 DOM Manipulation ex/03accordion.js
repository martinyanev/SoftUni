function toggle() {
    let extra = document.getElementById('extra');
    let btn = document.getElementsByClassName('button');
    if (extra.style.display === 'block'){
        extra.style.display = 'none';
        btn[0].textContent = 'More';
    } else {
        extra.style.display = 'block';
        btn[0].textContent = 'Less';
    }
}