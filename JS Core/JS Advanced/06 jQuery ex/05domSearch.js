function domSearch(selector, isCaseSensitive) {
    let select = $(selector);

    let addControls = $('<div>');
    addControls.addClass('add-controls');
    addControls.append('<label>Enter text: <input></label>');
    addControls.append('<a class="button" style="display: inline-block;">Add</a>');
    select.append(addControls);

    let searchControls = $('<div>');
    searchControls.addClass('search-controls');
    searchControls.append('<label>Search:<input></label>');
    select.append(searchControls);

    let resultControls = $('<div>');
    resultControls.addClass('result-controls');

    let ul = $('<ul>');
    ul.addClass('items-list');
    resultControls.append(ul);

    let addBtn = $('.add-controls a');
    addBtn.on('click', function (e) {
        e.preventDefault();

        let li = $('<li>');
        li.addClass('list-item');
        let a = $('<a>');
        a.addClass('button');
        a.text('X');
        li.append(a);
        li.append('<strong>' + $(".add-controls input").val() + '</strong>');
        ul.append(li);

        $(".add-controls input").val('');

        a.on('click', function (e) {
            e.preventDefault();

            let thisLi = a.parent();
            thisLi.remove();
        })
    });

    let searchInput = $('.search-controls input');
    let i = 0;
    searchInput.on('change', function (e) {
        e.preventDefault();

        if (!isCaseSensitive){

            // console.log($('.items-list li').toArray());

            // ul.each(function () {
            //     let liText= $(this).find('strong').text().toLowerCase();
            //     let searchedText = searchInput.val().toLowerCase();
            //     if (liText.indexOf(searchedText) !== -1){
            //         $(this).find('strong').css('text-decoration', 'underline');
            //     }
            //     // console.log(liText);
            //     // console.log(searchInput.val().toLowerCase());
            //
            //     // console.log($(this).find('strong').text());
            // })
        } else {
            ul.each(function () {

            })
        }
    });

    select.append(resultControls);
}


function domSearchM(selector, caseType) {
    let addControls = $('<div>')
        .addClass('add-controls')
        .append($('<label>').text('Enter text:').append($('<input>')))
        .append($('<a>')
            .addClass('button')
            .css('display', 'inline-block')
            .text('Add')
            .click(function () {
                let elementText = $('label input');
                let newElement = $('<li>')
                    .addClass('list-item')
                    .append($('<a>').addClass('button').text('X').click(function () {
                        $(this).parent().remove();
                    }))
                    .append($('<strong>').text(elementText.val().trim()));

                $('ul.items-list').append(newElement);
                elementText.val('');
            }));

    let searchControls = $('<div>')
        .addClass('search-controls')
        .append($('<label>').text('Search:').append($('<input>')
            .on('input', function () {
                let needle = $(this).val();
                let items = $('.list-item strong').toArray();
                for (let item of items) {
                    let current = $(item);

                    if (caseType) {
                        if (current.text().indexOf(needle) < 0) {
                            current.parent().css('display', 'none')
                        } else {
                            current.parent().css('display', '')
                        }
                    } else {
                        if (current.text().toLowerCase().indexOf(needle.toLowerCase()) < 0) {
                            current.parent().css('display', 'none')
                        } else {
                            current.parent().css('display', '')
                        }
                    }

                }
            })));

    let resultControls = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list'));

    $(selector)
        .append(addControls)
        .append(searchControls)
        .append(resultControls);
}