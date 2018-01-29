function parseEmployeeData(input) {
    let regex =
        /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    // let regex1 =
    //     /^([A-Z][a-zA-Z]*)- ([1-9][0-9]*)- ([a-zA-Z0-9-]+)$/;
    for (let element of input) {
        let match = regex.exec(element);
        // let match1 = regex1.exec(element);
        if (match){
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
        }
    }
}

// parseEmployeeData(
//     ['Jonathan - 2000 - Manager',
//         'Peter- 1000- Chuck',
//         'George - 1000 - Team Leader'
//     ]
// );