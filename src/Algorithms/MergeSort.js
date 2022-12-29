
export function getMergeSortAnimations(array) {
    const animations = [];
    const aux = array.slice();
    mergeSortHelper(array, 0, array.length - 1, aux, animations);
    return [animations, array];
}

function mergeSortHelper(array, l, r, aux, animations) {
    if (l === r) return;
    const m = Math.floor((l + r) / 2);
    mergeSortHelper(aux, l, m, array, animations);
    mergeSortHelper(aux, m + 1, r, array, animations);
    merge(array, l, m, r, aux, animations);
}

function merge(array, l, m, r, aux, animations) {
    let k = l;
    let i = l;
    let j = m + 1;
    while (i <= m && j <= r) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (aux[i] <= aux[j]) {
            animations.push([k, aux[i]]);
            array[k++] = aux[i++];
        } else {
            animations.push([k, aux[j]]);
            array[k++] = aux[j++];
        }
    }
    while (i <= m) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, aux[i]]);
        array[k++] = aux[i++];
    }
    while (j <= r) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, aux[j]]);
        array[k++] = aux[j++];
    }
}
