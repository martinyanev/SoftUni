function increment(contain) {
    let container = $(contain);

    container.append('<textarea class="counter" disabled>0</textarea>');
    container.append('<button class="btn" id="incrementBtn">Increment</button>');
    container.append('<button class="btn" id="addBtn">Add</button>');

    let ul = $('<ul>');
    ul.addClass('results');


    let incBtn = $('#incrementBtn');
    incBtn.on('click', incrementClicked);

    function incrementClicked(e) {
        e.preventDefault();

        $('.counter').val(+$('.counter').val() + 1);
    }

    let addBtn = $('#addBtn');
    addBtn.on('click', addClicked);

    function addClicked() {
        // e.preventDefault();

        // console.log('in');
        let li = '<li>' + $('.counter').val() + '</li>';
        ul.append(li);
    }

    container.append(ul);

}