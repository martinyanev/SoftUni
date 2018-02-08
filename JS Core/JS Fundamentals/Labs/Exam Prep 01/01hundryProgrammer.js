function hungryProgrammer(mealPortions, commands) {

    let eatenMeals = 0;
    for (let i = 0; i < commands.length; i++){
        let command = commands[i].split(' ');

        if (command[0].toLowerCase() === 'serve'){
            if (mealPortions.length > 0){
                // Показва и трие последния елемент в масива
                console.log(`${mealPortions.pop()} served!`);
            }
        } else if (command[0].toLowerCase() === 'add'){
            let meal = command[1];
            if (meal !== ''){
                // Добавя в първия индекс в масива
                mealPortions.unshift(meal);
            }
        } else if (command[0].toLowerCase() === 'shift'){
            // Разменя позициите на двата елемента
            let startIdx = command[1];
            let endIdx = command[2];

            let hasValidIndexes = endIdx > 0 && startIdx >= 0
                && endIdx < mealPortions.length && startIdx < endIdx;

            if (hasValidIndexes) {
                let temp = mealPortions[startIdx];
                mealPortions[startIdx] = mealPortions[endIdx];
                mealPortions[endIdx] = temp;
            }

        } else if (command[0].toLowerCase() === 'eat'){
            if (mealPortions.length > 0){
                // Премахва и показва първия елемент в масива
                console.log(`${mealPortions.shift()} eaten`);
                eatenMeals++;
            }
        } else if (command[0].toLowerCase() === 'consume'){
            let startIdx = command[1];
            let endIdx = command[2];
            let hasValidIndexes = startIdx >= 0 && endIdx > 0
                && startIdx < endIdx && endIdx < mealPortions.length;

            if (hasValidIndexes) {
                // Премахва елементите от индекс до индекс
                let mealsToEat = endIdx - startIdx + 1;
                // Премахва елементите от индекс, съответната бройка
                mealPortions.splice(startIdx, mealsToEat);
                eatenMeals += mealsToEat;
                console.log('Burp!');
            }
        } else if (command[0].toLowerCase() === 'end'){
            if (mealPortions.length > 0){
                console.log('Meals left: ' + mealPortions.join(', '));
            } else {
                console.log('The food is gone');
            }
            console.log(`Meals eaten: ${eatenMeals}`);
            return;
        }
    }
    // console.log(mealPortions);
}

hungryProgrammer(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',]
);