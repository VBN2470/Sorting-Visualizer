
import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import '../SortingVisualizer';

const NavBar = props => {

    const { generateArray, findAnimationSpeed, isAnimating, bubbleSort, cocktailSort, heapSort, 
        insertionSort, mergeSort, quickSort } = props;

    return (
        <Navbar className="navbar" bg="light" expand="lg">
            <Navbar.Brand href="">
                <h3 style={{ color: 'black' }}>
                    <i className="fas fa-signal"></i> Sorting Visualizer
                </h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Button disabled={isAnimating()} onClick={generateArray} variant="primary">
                        Generate New Array
                    </Button>
                    <Button id="slider" style={{cursor: 'auto'}} variant="light">Adjust Speed</Button>
                    <input
                        type="range"
                        min="-10"
                        max="0"
                        step="1"
                        defaultValue="-5"
                        disabled={isAnimating()}
                        onChange={e => findAnimationSpeed(e)}                          
                    />
                    <Button disabled={isAnimating()} onClick={mergeSort} variant="light">
                        Merge Sort
                    </Button>
                    <Button disabled={isAnimating()} onClick={bubbleSort} variant="light">
                        Bubble Sort
                    </Button>
                    <Button disabled={isAnimating()} onClick={cocktailSort} variant="light">
                        Cocktail Sort
                    </Button>
                    <Button disabled={isAnimating()} onClick={insertionSort} variant="light">
                        Insertion Sort
                    </Button>
                    <Button disabled={isAnimating()} onClick={quickSort} variant="light">
                        Quick Sort
                    </Button>
                    <Button disabled={isAnimating()} onClick={heapSort} variant="light">
                        Heap Sort
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
