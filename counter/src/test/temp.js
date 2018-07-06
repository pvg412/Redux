
export default function minTemp() {
    let arr = Array.from(arguments);
    let module = arr.map(el => Math.abs(el));
    return arr.every(el => el < 0) ? Math.max(...arr) : Math.min(...module);
    // return Math.min(...module);
}

minTemp(1, -2, -8, 4, 5);
