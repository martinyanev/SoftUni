function solve(arr) {
    let result = {};
    for (let obj of arr) {
        let system = obj['system'];
        let candidate = obj['candidate'];
        let votes = obj['votes'];
        if(result.hasOwnProperty(system)) {
            if(result[system].hasOwnProperty(candidate)) {
                result[system][candidate] += votes
            } else {
                result[system][candidate] = votes
            }
        } else {
            // Обавяне на обект в обекта
            result[system] = {};
            result[system][candidate] = votes
        }
    }
    let totalSum = 0;
    // Този фор взима ключа на всеки елемент в обекта
    for (let key in result) {
        // Обект.ключове, взима всички ключове в този обект и ги сортира възходящо
        let winner = Object.keys(result[key]).sort((a,b) => result[key][b]-result[key][a])[0];
        let sum = 0;
        for (let innerKey in result[key]) {
            sum+= result[key][innerKey]
        }
        // Променяме резулт кей само с победителя
        result[key] = {};
        result[key]['candidate'] = winner;
        result[key]['votes'] = sum;
        // Общия брой гласове в изборите
        totalSum += sum
    }
    let players = {};

    // Вкарваме всички с най-голям резултат в плейърс.
    // Ако има човек от 2 различни системи се обединяват
    for (let key in result) {
        if(players.hasOwnProperty(result[key]['candidate'])) {
            players[result[key]['candidate']] += result[key]['votes']
        } else {
            players[result[key]['candidate']] = result[key]['votes']
        }
    }
    // Сортира играчите по име?
    let sortedPlayers = Object.keys(players).sort((a,b) => players[b] - players[a]);
    // Сортира резултатите на кандидатите, но в ПРОЦЕНТИ
    let sortedPercents = Object.values(players).sort((a,b) => b - a)
        .map(a => Math.floor(a / totalSum * 100));
    // Сортира системите по общ брой гласове
    let sortedSystems = Object.keys(result).sort((a,b) => result[b]['votes'] - result[a]['votes']);
    // Ако претендент е получил повече от 50 процента
    if(sortedPercents[0] > 50) {
        // Ако има повече от 1 претендент
        if(sortedPlayers.length > 1) {
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`);
            console.log(`Runner up: ${sortedPlayers[1]}`);
            for (let system of sortedSystems) {
                if(result[system]['candidate'] === sortedPlayers[1]) {
                    console.log(system + ': ' + result[system]['votes'])
                }
            }
        } // Ако има само 1 претендент
        else {
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`);
            console.log(`${sortedPlayers[0]} wins unopposed!`)
        }
    } // Ако има балотаж
    else {
        console.log(`Runoff between ${sortedPlayers[0]} with ${sortedPercents[0]}%`+
            ` and ${sortedPlayers[1]} with ${sortedPercents[1]}%`)
    }
}

// solve([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 JSON lab },
//     { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
//     { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
//     { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
//     { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
//     { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ])

// solve([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
//     { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
//     { system: 'Theta',   candidate: 'Space Cow',     votes: 10 JSON lab },
//     { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
//     { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
//     { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
//     { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ])

// solve([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 JSON lab },
//     { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
//     { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ])