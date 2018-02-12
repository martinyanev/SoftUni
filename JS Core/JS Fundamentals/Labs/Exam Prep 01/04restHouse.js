function settleGuests(availableRooms, guests) {
    let rooms = extractRooms(availableRooms);
    let guestsWithoutRooms = 0;

    for (let couple of guests) {
        let roomFound = false;

        if (couple.first.gender !== couple.second.gender) {
            roomFound = settleDifferentSex(couple, roomFound)
        } else {
            roomFound = settleSameSex(couple, roomFound)
        }
        if (!roomFound) {
            guestsWithoutRooms += couple.first ? 2 : 1
        }
    }
    printReport();

    function settleSameSex(couple, roomFound) {
        // Взима типа на стаите, които са тройни
        for (let room of [...rooms.values()].filter(r => r.type == 'triple')) {
            // Ако има достатъчно свободни места
            if (room.emptyBeds >= 2) {
                // Създаваме ново пропърти за стаята (гости)
                if (!room.guests) {
                    room.guests = []
                } // Ако имаме настанен човек в стаята, но той е от различен пол, не можем да ги добавим
                else if (room.guests[0].gender !== couple.second.gender) {
                    continue
                }

                // Ако имам човек го добавям в съответната стая
                if (couple.first) {
                    settleSingleGuest(couple.first, room)
                }

                settleSingleGuest(couple.second, room);
                roomFound = true;
                break
            } else if (room.emptyBeds === 1) {
                if (room.guests[0].gender === couple.second.gender) {
                    // Ако нямаме първи гост, поставяме 2ри
                    settleSingleGuest(couple.first ? couple.first : couple.second, room)
                    couple.first = undefined
                }
            }
        }
        return roomFound

    }

    function settleSingleGuest(guest, room) {
        room.guests.push(guest);
        room.emptyBeds -= 1;
    }

    function settleDifferentSex(couple, roomFound) {
        // Различен пол може да се добави само в двойна стая
        let room = [...rooms.values()].find(r => r.type === 'double-bedded' && r.emptyBeds === 2);

        if (room) {
            room.guests = [];
            room.guests = [couple.first, couple.second];
            room.emptyBeds = 0;
            roomFound = true;

            return roomFound
        }
    }

    function extractRooms(availableRooms) {
        let rooms = new Map();
        for (let currentRoom of availableRooms) {
            let beds = currentRoom.type === 'double-bedded' ? 2 : 3;
            rooms.set(currentRoom.number,
                // Прави се обект, какъв тип е стаята и колко свободни легла има
                {type: currentRoom.type, emptyBeds: beds }
                )
        }
        return rooms
    }

    function printReport() {
        // Сортираме стаите по номер (име)
        for (let [number, room] of [...rooms].sort()) {
            console.log(`Room number: ${number}`);
            // Ако има гости в стаята
            if (room.guests) {
                // Сортира гостите по име в масива
                for (let guest of room.guests.sort(guestsComparator())) {
                    console.log(`--Guest Name: ${guest.name}`);
                    console.log(`--Guest Age: ${guest.age}`);
                }
            }
            console.log(`Empty beds in the room: ${room.emptyBeds}`)
        }
        console.log(`Guests moved to the tea house: ${guestsWithoutRooms}`);

        function guestsComparator() {
            return function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            };
        }
    }

}