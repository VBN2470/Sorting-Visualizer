
export function getInsertionSortAnimations(array) {
    const animations = [];
    for (let i = 1; i < array.length; i++) {
        animations.push(['comparisonOne', i - 1, i]);
        animations.push(['comparisonTwo', i - 1, i]);
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            animations.push(['overwrite', j + 1, array[j]]);
            array[j + 1] = array[j];
            j--;
            if (j >= 0) {
                animations.push(['comparisonOne', j, i]);
                animations.push(['comparisonTwo', j, i]);
            }
        }
        animations.push(['overwrite', j + 1, key]);
        array[j + 1] = key;
    }
    return [animations, array];
}
