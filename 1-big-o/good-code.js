const { performance } = require('perf_hooks')
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(10000).fill('nemo')

function findNemo(array) {
    // there are n operations performed in this implementation,
    //  where n in this case is the length of the searched array
    // this is also called 'linear time'
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') console.log('found nemo!')
    }
}

findNemo(large)

function compressFirstBox(boxes) {
    // as 'boxes' grows, the # of operations remains constant
    // known as 'constant time'
    console.log(boxes[0]);
}