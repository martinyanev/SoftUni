function createBook(selector, title, author, number) {
    let container = $(selector);

    let bookDiv = $('<div>');
    bookDiv.attr('id', 'book1');
    bookDiv.css('border', 'medium none');

    let titleP = $('<p>');
    titleP.addClass('title');
    titleP.text(title);

    let authorP = $('<p>');
    authorP.addClass('author');
    authorP.text(author);

    let isbn = $('<p>');
    isbn.addClass('isbn');
    isbn.text(number);

    let selectBtn = $('<button>');
    selectBtn.text('Select');

    let deselectBtn = $('<button>');
    deselectBtn.text('Deselect');

    selectBtn.on('click', function () {
        $('#book1').css('border', '2px solid blue')
    });

    deselectBtn.on('click', function () {
        $('#book1').css('border', 'none')
    });

    container.append(bookDiv);
    bookDiv.append(titleP);
    bookDiv.append(authorP);
    bookDiv.append(isbn);
    bookDiv.append(selectBtn);
    bookDiv.append(deselectBtn);
}