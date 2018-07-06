
export default function sumArray(arr) {
    return arr
        .reduce((sum, x) => sum + x, 0);
}