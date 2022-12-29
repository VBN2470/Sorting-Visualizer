
export function getCocktailSortAnimations(array) {
    const animations = [];
    let isSorted = false;
    let start = 0,
        end = array.length - 1;
    
    while (!isSorted) {
        isSorted = true;
        for (let i = start; i < end - 1; i++) {
            animations.push(['comparisonOne', i, i + 1]);
            animations.push(['comparisonTwo', i, i + 1]);
            if (array[i] > array[i + 1]) {
                animations.push(['swap', i, array[i + 1]]);
                animations.push(['swap', i + 1, array[i]]);
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        end--;

        if (isSorted) break;
        isSorted = true;
        
        for (let i = end; i > start - 1; i--) {
            animations.push(['comparisonOne', i, i + 1]);
            animations.push(['comparisonTwo', i, i + 1]);
            if (array[i] > array[i + 1]) {
                animations.push(['swap', i, array[i + 1]]);
                animations.push(['swap', i + 1, array[i]]);
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        start++;
        
    }
    return [animations, array];
}

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
