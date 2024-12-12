const nums = [2, 65, 244, 32, 1, 4, 7, 8, 357, 44, 9];

const selectionSort = (arr) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log(selectionSort(nums));
