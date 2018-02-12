function game(kingdomsInput, battles) {
    let kingdoms = new Map();

    for (let i = 0; i < kingdomsInput.length; i++){
        // console.log(kingdomsInput[i]);
        let kingdom = kingdomsInput[i];
        let kingdomName = kingdom.kingdom;
        let generalName = kingdom.general;

        if (!kingdoms.has(kingdomName)){
            kingdoms.set(kingdomName, new Map());
        }

        if (!kingdoms.get(kingdomName).has(generalName)){
            kingdoms.get(kingdomName).set(generalName, {});
            kingdoms.get(kingdomName).get(generalName)['army'] = 0;
            kingdoms.get(kingdomName).get(generalName)['wins'] = 0;
            kingdoms.get(kingdomName).get(generalName)['losses'] = 0;
        }

        kingdoms.get(kingdomName).get(generalName)['army'] += Math.floor(kingdom.army);
    }

    kingdoms = new Map([...kingdoms.entries()].sort());

    for (let i = 0; i < battles.length; i++){
        let battle = battles[i];
        let atakerName = battle[1];
        let defName = battle[3];

        let attackerArmy = kingdoms.get(battle[0]).get(battle[1])['army'];
        let deffenderArmy = kingdoms.get(battle[2]).get(battle[3])['army'];

        if (battle[0] === battle[2]){
            continue;
        }

        if (battle[1] === battle[3]){
            continue;
        }

        if (attackerArmy > deffenderArmy){
            kingdoms.get(battle[0]).get(battle[1])['army'] = Math.floor(kingdoms.get(battle[0]).get(battle[1])['army'] + attackerArmy * 0.1);
            kingdoms.get(battle[0]).get(battle[1])['wins'] += 1;
            kingdoms.get(battle[2]).get(battle[3])['army'] =  Math.floor(kingdoms.get(battle[2]).get(battle[3])['army'] - deffenderArmy * 0.1);
            kingdoms.get(battle[2]).get(battle[3])['losses'] += 1;
        } else if (deffenderArmy > attackerArmy){
            kingdoms.get(battle[0]).get(battle[1])['army'] =  Math.floor(kingdoms.get(battle[0]).get(battle[1])['army'] - attackerArmy * 0.1);
            kingdoms.get(battle[0]).get(battle[1])['losses'] += 1;
            kingdoms.get(battle[2]).get(battle[3])['army'] =  Math.floor(kingdoms.get(battle[2]).get(battle[3])['army'] + deffenderArmy * 0.1);
            kingdoms.get(battle[2]).get(battle[3])['wins'] += 1;
        }
    }

    let kingdomsSummary = new Map();
// console.log(kingdoms);
    kingdoms.forEach(function (value, key) {
        let stats = 0;
        value.forEach(function (value1, key1) {
            stats += value1['wins'];
            stats -= value1['losses']
        });
        kingdomsSummary.set(key, stats);
    });
    // console.log(kingdomsSummary);
    let winners = [];
    kingdomsSummary.forEach(function (value, key) {
        if(winners.length === 0){
            winners.push(key);
        } else {
            if (kingdomsSummary.get(winners[0]) === value){
                winners.push(key);
            } else if (kingdomsSummary.get(winners[0]) < value){
                winners = [];
                winners.push(key);
            }
        }
    });

    winners.sort(function (a, b) {
        return a.localeCompare(b);
    });
    let winner = winners[0];

    // console.log(winner);

    let capitanSummaryWins = {};
    let capitans = [...kingdoms.get(winner).keys()];

    for (let capitan of capitans){
        capitanSummaryWins[capitan] = kingdoms.get(winner).get(capitan)['wins'];
    }

    capitanSummaryWins = Object.keys(capitanSummaryWins).sort(function(a,b){return capitanSummaryWins[b]-capitanSummaryWins[a]});

    let capitanSummaryEqualsWins = {};
    for (let capitan of capitanSummaryWins){
        let capitanWins = kingdoms.get(winner).get(capitan)['wins'];

        for (let serchCap of capitanSummaryWins){
            if (capitanWins === kingdoms.get(winner).get(serchCap)['wins']){
                capitanSummaryEqualsWins[capitan] = kingdoms.get(winner).get(serchCap)['losses'];
                capitanSummaryEqualsWins[serchCap] = kingdoms.get(winner).get(serchCap)['losses'];
            }
        }
    }

    capitanSummaryEqualsWins = Object.keys(capitanSummaryEqualsWins).sort(function(a,b){return capitanSummaryEqualsWins[a]-capitanSummaryEqualsWins[b]});

    // console.log(capitanSummaryEqualsWins);

    console.log(`Winner: ${winner}`);
    for (let capitan of capitanSummaryEqualsWins){
        console.log(`/\\general: ${capitan}`);
        console.log('---army: ' + kingdoms.get(winner).get(capitan)['army']);
        console.log('---wins: ' + kingdoms.get(winner).get(capitan)['wins']);
        console.log('---losses: ' + kingdoms.get(winner).get(capitan)['losses']);
    }
}

/*
TESTS
 */

game([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Atonegate", general: "Ulric", army: 4900 },
        { kingdom: "Atonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Atonegate", "Ulric"],
        ["Atonegate", "Ulric", "Atonegate", "Doran"],
        ["Atonegate", "Doran", "Maiden Way", "Merek"],
        ["Atonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Atonegate", "Ulric"] ]

);

// game([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//         { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
// );

// game([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//         { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//         { kingdom: "Stonegate", general: "Doran", army: 70000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
// );