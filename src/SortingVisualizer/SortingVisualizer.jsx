
import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import NavBar from './NavBar/NavBar';
import { getMergeSortAnimations } from '../Algorithms/MergeSort';
import { getBubbleSortAnimations } from '../Algorithms/BubbleSort';
import { getCocktailSortAnimations } from '../Algorithms/CocktailSort';
import { getHeapSortAnimations } from '../Algorithms/HeapSort';
import { getInsertionSortAnimations} from '../Algorithms/InsertionSort';
import { getQuickSortAnimations } from '../Algorithms/QuickSort';

const PRIMARY_COLOR = 'rgb(64, 132, 240, 0.9)';
const SECONDARY_COLOR = 'red';
const PIVOT_COLOR = 'green';

const SortingVisualizer = () => {
    
    const [array, setArray] = useState([]);
    const [ANIMATION_SPEED_MS, setAnimationSpeed] = useState(10);
    const [ARRAY_BARS, setArrayBars] = useState(120);
    const [isAnimating, setAnimating] = useState(false);

    useEffect(() => {
        resetArray();
    }, []);

    const findAnimationSpeed = e => {
        const currentSpeed = Math.abs(parseInt(e.target.value));
        setAnimationSpeed(currentSpeed);
    }

    const isAnimatingNow = () => {
        return isAnimating;
    }

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(8, 480));
        }
        setArray(array);
    }

    // Bubble Sort
    const bubbleSort = () => {
        const [animations, sortedArray] = getBubbleSortAnimations(array.slice());
        animateBubbleSort(animations, sortedArray);
    }

    const animateBubbleSort = (animations, sortedArray) => {
        setAnimating(true);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            const isColorChange = animations[i][0] === 'comparisonOne' || animations[i][0] === 'comparisonTwo';
            if (isColorChange) {
                const [, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = animations[i][0] === 'comparisonOne' ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
            } else {
                const [, barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED_MS);
            }
        }
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('bar');
            for (let arrayBar of arrayBars) {
                arrayBar.className = 'bar flash';
                setTimeout(() => {
                    arrayBar.className = 'bar';
                }, 1000);
            }
            setArray(sortedArray);
            setAnimating(false);
        }, ANIMATION_SPEED_MS * animations.length);
    }

    // Cocktail Sort
    const cocktailSort = () => {
        const [animations, sortedArray] = getCocktailSortAnimations(array.slice());
        animateCocktailSort(animations, sortedArray);
    }

    const animateCocktailSort = (animations, sortedArray) => {
        setAnimating(true);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            const isColorChange = animations[i][0] === 'comparisonOne' || animations[i][0] === 'comparisonTwo';
            if (isColorChange) {
                const [, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = animations[i][0] === 'comparisonOne' ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [, barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('bar');
            for (let arrayBar of arrayBars) {
                arrayBar.className = 'bar flash';
                setTimeout(() => {
                    arrayBar.className = 'bar';
                }, 1000);
            }
            setArray(sortedArray);
            setAnimating(false);
        }, ANIMATION_SPEED_MS * animations.length);
    }

    // Heap Sort
    const heapSort = () => {
        const [animations, sortedArray] = getHeapSortAnimations(array.slice());
        animateHeapSort(animations, sortedArray);
    }

    const animateHeapSort = (animations, sortedArray) => {
        setAnimating(true);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            const isColorChange = i % 4 === 0 || i % 4 === 1;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [isFinal, barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                    if (isFinal) barOneStyle.backgroundColor = 'royalblue';
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('bar');
            for (let arrayBar of arrayBars) {
                arrayBar.className = 'bar flash';
                setTimeout(() => {
                    arrayBar.className = 'bar';
                }, 1000);
            }
            setArray(sortedArray);
            setAnimating(false);
        }, ANIMATION_SPEED_MS * animations.length);
    }

    // Insertion Sort
    const insertionSort = () => {
        const [animations, sortedArray] = getInsertionSortAnimations(array.slice());
        animateInsertionSort(animations, sortedArray);
    }

    const animateInsertionSort = (animations, sortedArray) => {
        setAnimating(true);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            const isColorChange = animations[i][0] === 'comparisonOne' || animations[i][0] === 'comparisonTwo';
            if (isColorChange) {
                const [, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = animations[i][0] === 'comparisonOne' ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                const [, barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED_MS)
            }
        }
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('bar');
            for (let arrayBar of arrayBars) {
                arrayBar.className = 'bar flash';
                setTimeout(() => {
                    arrayBar.className = 'bar';
                }, 1000);
            }
            setArray(sortedArray);
            setAnimating(false);
        }, ANIMATION_SPEED_MS * animations.length);
    }

    // Merge Sort
    const mergeSort = () => {
        const [animations, sortedArray] = getMergeSortAnimations(array.slice());
        animateMergeSort(animations, sortedArray);
    }

    const animateMergeSort = (animations, sortedArray) => {
        setAnimating(true);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED_MS);
            }
        }
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('bar');
            for (let arrayBar of arrayBars) {
                arrayBar.className = 'bar flash';
                setTimeout(() => {
                    arrayBar.className = 'bar';
                }, 1000);
            }
            setArray(sortedArray);
            setAnimating(false);
        }, ANIMATION_SPEED_MS * animations.length);
    }

    // Quick Sort
    const quickSort = () => {
        const [animations, sortedArray] = getQuickSortAnimations(array.slice());
        animateQuickSort(animations, sortedArray);        
    }

    const animateQuickSort = (animations, sortedArray) => {
        setAnimating(true);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            const isColorChange = (i % 6 === 0) || (i % 6 === 1);
            if (isColorChange) {
                const color = i % 6 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                // const pivotColor = (i % 6 !== 4 || i % 6 !== 5) ? PIVOT_COLOR : PRIMARY_COLOR;
                const [pivotIdx, barOneIdx, barTwoIdx] = animations[i];
                if (barOneIdx === -1) continue;
                const pivotStyle = arrayBars[pivotIdx].style;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    pivotStyle.backgroundColor = PIVOT_COLOR;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
            } else {
                const [, barOneIdx, newHeight] = animations[i];
                if (barOneIdx === -1) continue;
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('bar');
            for (let arrayBar of arrayBars) {
                arrayBar.className = 'bar flash';
                setTimeout(() => {
                    arrayBar.className = 'bar';
                }, 1000);
            }
            setArray(sortedArray);
            setAnimating(false);
        }, ANIMATION_SPEED_MS * animations.length + 100);
    }

    return (
        <>
            <NavBar
            generateArray={resetArray}
            findAnimationSpeed={e => findAnimationSpeed(e)}
            isAnimating={isAnimatingNow}
            bubbleSort={bubbleSort}
            cocktailSort={cocktailSort}
            heapSort={heapSort}
            insertionSort={insertionSort}
            mergeSort={mergeSort}
            quickSort={quickSort}
            ></NavBar>
            <div className="container-fluid">
                {array.map((value, idx) =>
                    (<div
                        className="bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`
                        }}>
                    </div>
                    )
                )}
            </div>
        </>
    );
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export default SortingVisualizer
