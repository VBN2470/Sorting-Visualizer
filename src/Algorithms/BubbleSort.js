
export function getBubbleSortAnimations(array) {
    const animations = [];
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            animations.push(['comparisonOne', i, i + 1]);
            animations.push(['comparisonTwo', i, i + 1]);
            if (array[i] > array[i + 1]) {
                animations.push(['swap', i, array[i + 1]]);
                animations.push(['swap', i + 1, array[i]]);
                swap(i, i + 1, array);
                isSorted = false
            }
        }
        counter++;
    }
    return [animations, array];
}

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
