const { performance } = require('perf_hooks')
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(10000).fill('nemo')

function findNemo(array) {
    // there are n operations performed in this implementation,
    //  where n in this case is the length of the searched array
    // this is also called 'linear time'
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') { 
            console.log('found nemo!')
            break
        }
    }
}

// findNemo(large);

function compressFirstBox(boxes) {
    // as 'boxes' grows, the # of operations remains constant
    // known as 'constant time'
    console.log(boxes[0])
}

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    let middleIndex = Math.floor(items.length / 2);
    let index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (let i = 0; i < 100; i++) {
        console.log('hi');
    }
}
// O(1 + n/2 + 100)
// remove constants
// O(n)

// printFirstItemThenFirstHalfThenSayHi100Times(everyone);

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach((box) => console.log(box));
    boxes2.forEach((box) => console.log(box));
}

// O(n)
// O(n + m)

// nested loops

// log all pairs of an array
const boxes = [1,2,3,4,5];

function logPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

// logPairs(boxes);

// nested loops become multiplication in big O notation
// big o of logPairs is O(n^2)

function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are the numbers:');
    numbers.forEach(number => console.log(number));

    console.log('these are their sums:');
    numbers.forEach(firstNum => {
        numbers.forEach(secondNum => {
            console.log(firstNum + secondNum);
        })
    })
}

// printAllNumbersThenAllPairSums(boxes);

// O(n + n^2) => O(n^2)

// oh no! factorial time O(n!) - creating a nested loop for every input we have

// space complexity aside:
function boo(input) {
    for (let i = 0; i < input.length; i++) {
        console.log('boo!')
    }
}
// space complexity of O(1) (no new memory allocation)

boo([1,2,3,4,5])

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < input.length; i++) {
        hiArray[i] = 'hi'
    }
    return hiArray;
}
// space complexity of O(n) - we are assigning memory linear to the input

