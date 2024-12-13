// useful for times the list is already mostly sorted

const nums = [2, 65, 244, 32, 1, 4, 7, 8, 357, 44, 9];

// sort items least to greatest
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }

  return arr;
};

console.log(insertionSort(nums));
