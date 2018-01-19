function imperalUnits(foot) {
    let inches = Math.floor(foot / 12);
    let second = foot % 12;

    console.log(inches + "'-" + second + "\"");
}