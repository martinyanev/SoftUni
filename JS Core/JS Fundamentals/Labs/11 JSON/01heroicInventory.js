function heroicInventory(input) {
    let result = [];

    for (let i = 0; i < input.length; i++){
        let [heroName, heroLevel, items] = input[i].split(' / ');
        heroLevel = Number(heroLevel);
        let itemsArray = items.split(', ');

        let hero = {
            name: heroName,
            level: heroLevel,
            items: itemsArray
        };

        result.push(hero);
    }
    console.log(JSON.stringify(result));
}


function heroicInventoryy(arr){
    let heroData=[];

    for (let i = 0; i < arr.length; i++) {
        let currentHeroArguments = arr[i].split(' / ');
        let currentHeroItems=[];
        let currentHeroName=currentHeroArguments[0];
        let currentHeroLevel=Number(currentHeroArguments[1]);
        if(currentHeroArguments.length>2) {
            currentHeroItems = currentHeroArguments[2].split(", ");
        }
        let hero={
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}