function notify(message) {

    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    let time = setTimeout(function () {
        notification.textContent = message;
        notification.style.display = 'none';
    }, 2000);
}