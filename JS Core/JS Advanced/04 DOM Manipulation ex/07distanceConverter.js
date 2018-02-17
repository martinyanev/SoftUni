function attachEventsListeners() {
    let btn = document.getElementById('convert');

    let arr = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    btn.addEventListener('click', function () {
        let fromUnit = document.getElementById('inputUnits').value;
        let toUnit = document.getElementById('outputUnits').value;
        let num = document.getElementById('inputDistance').value;

        let meters = toMeters(fromUnit, num);

        let result = toOutput(toUnit, meters);

        document.getElementById('outputDistance').value = result;

    })

    function toMeters(fromUnit, clc) {
        return clc * arr[fromUnit];
    }

    function toOutput(toUnit, meters) {
        return meters / arr[toUnit];
    }
}