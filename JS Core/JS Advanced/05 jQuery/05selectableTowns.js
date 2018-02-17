function attachEvents() {
    $('ul#items li').on('click', listClicked);

    function listClicked() {
        // if (this.hasClass('selected')){
        //     this.removeClass('selected');
        //     this.css('background-color', '');
        // } else {
        //     this.addClass('selected');
        //     this.css('background-color', '#DDD');
        // }

        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    }
    $('#showTownsButton').on('click', showTowns);

    function showTowns() {
        let items = $('.selected')
            .toArray()
            .map(li => li.textContent)
            .join(', ');
        $('#selectedTowns').text('Selected towns: ' + items);
    }
}

function attachEventss() {
    $('#items').on('click', 'li', function() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    });
    $('#showTownsButton').on('click', function() {
        let selLi = $('#items li[data-selected=true]');
        let towns = selLi.toArray()
            .map(li => li.textContent).join(', ');
        $('#selectedTowns')
            .text("Selected towns: " + towns);
    });
}
