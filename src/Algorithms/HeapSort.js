
export function getHeapSortAnimations(array) {
    let animations = [];
    buildMaxHeap(array, animations);
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        animations.push([0, endIdx]);
        animations.push([0, endIdx]);
        animations.push([true, 0, array[endIdx]]);
        animations.push([true, endIdx, array[0]]);
        swap(0, endIdx, array);
        siftDown(0, endIdx - 1, array, animations);
    }
    return [animations, array];
}

function buildMaxHeap(array, animations) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        siftDown(currentIdx, array.length - 1, array, animations);
    }
}

function siftDown(currentIdx, endIdx, heap, animations) {
    let childOneIdx = 2*currentIdx + 1;
    while (childOneIdx <= endIdx) {
        const childTwoIdx = 2*currentIdx + 2 <= endIdx ? 2*currentIdx + 2 : -1;
        let idxToSwap;
        if (childTwoIdx > -1 && heap[childTwoIdx] > heap[childOneIdx]) {
            idxToSwap = childTwoIdx;
        } else {
            idxToSwap = childOneIdx;
        }
        if (heap[idxToSwap] > heap[currentIdx]) {
            animations.push([currentIdx, idxToSwap]);
            animations.push([currentIdx, idxToSwap]);
            animations.push([false, currentIdx, heap[idxToSwap]]);
            animations.push([false, idxToSwap, heap[currentIdx]]);
            swap(currentIdx, idxToSwap, heap);
            currentIdx = idxToSwap;
            childOneIdx = 2*currentIdx + 1;
        } else {      
            return;
        }
    } 
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
