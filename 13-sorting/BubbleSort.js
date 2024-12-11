

const nums = [2, 65, 244, 32, 1, 4, 7, 8, 357, 44, 9];

// O(n^2)
const bubbleSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(nums));