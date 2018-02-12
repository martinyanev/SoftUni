function surveyParser(string) {
    let surveyDataMatch = /(?:<svg>)((.|\n)+)(?:<\/svg>)/g.exec(string);
    // Това е само анкетата!
    // console.log(surveyDataMatch);
    if (surveyDataMatch === null){
        console.log('No survey found');
        return;
    }
    let surveyData = surveyDataMatch[1];
    // console.log(surveyData);
    // Сега трябва да се провери дали има 2 тага cat и дали са в начало и край
    let startsFinishsCat = /^(?:<cat>)((.|\n)+)(?:<\/cat>)$/g.exec(surveyData);
    if (startsFinishsCat === null){
        console.log('Invalid format');
        return;
    }
    let startsFinishsCata = startsFinishsCat[1];

    if (startsFinishsCata.match(/<\/cat>/g).length !== 1 || startsFinishsCata.match(/<cat>/g).length !== 1){
        console.log('Invalid format');
        return;
    }

    // console.log(surveyData);
    let labelRex = /^<cat>(?:.|\n)*<text>(?:.|\n)*(?:\[)(.*?)(?:\])(?:.|\n)*<\/text><\/cat>/g.exec(surveyData);
    if (labelRex === null){
        console.log('Invalid format');
        return
    }
    let label = labelRex[1];


    // console.log(surveyData);
    let valuesRex = /^<cat>.*?(<g>.*?<\/g>)<\/cat>/g.exec(surveyData);
    if (valuesRex === null){
        console.log('Invalid format');
        return;
    }
    let values = valuesRex[1];

    let sumRatings = 0;
    let countVotes = 0;

    // console.log(values);

    let regex = /(?:<g><val>(\d+)<\/val>(\d+)<\/g>)/g;
    // values = String(values);
    let groups = values.match(regex);
    if (groups.length === 0){
        console.log('Invalid format');
        return;
    }

    // console.log(groups);
    for (let i = 0; i < groups.length; i++) {
        let ratingValue = Number(/^<g><val>(\d+)/g.exec(groups[i])[1]);
        let voteCount = Number(/<\/val>(\d+)<\/g>$/g.exec(groups[i])[1]);
        if (ratingValue > 10){
            console.log('Invalid format');
            return;
        }
        sumRatings += ratingValue * voteCount;
        countVotes += voteCount;
    }

    let result = Number.parseFloat((sumRatings / countVotes).toFixed(2));
    console.log(label + ': ' + result);
}

/*
TESTS
 */
surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
// surveyParser('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
// surveyParser('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>');
// surveyParser('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');