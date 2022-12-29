
export function getQuickSortAnimations(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return [animations, array];
} 

function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx >= endIdx) return;
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (leftIdx <= rightIdx) {
        animations.push([pivotIdx, leftIdx, rightIdx]);
        animations.push([pivotIdx, leftIdx, rightIdx]);
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            animations.push([pivotIdx, leftIdx, array[rightIdx]]);
            animations.push([pivotIdx, rightIdx, array[leftIdx]]);
            swap(leftIdx, rightIdx, array);
        } else {
            animations.push([pivotIdx, -1, -1]);
            animations.push([pivotIdx, -1, -1]);
        }
        if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
        if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
        animations.push([pivotIdx, -1, -1]);
        animations.push([pivotIdx, -1, -1]);
    }
    for (let i = 0; i < 4; i++) { 
        animations.push([pivotIdx, -1, -1]); 
    }
    animations.push([pivotIdx, pivotIdx, array[rightIdx]]);
    animations.push([pivotIdx, rightIdx, array[pivotIdx]]);
    swap(pivotIdx, rightIdx, array);
    const isLeftSubarraySmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (isLeftSubarraySmaller) {
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
    } else {
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
    }
}

function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
