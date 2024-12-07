// given two arrays, create a function that returns a boolean representing whether those arrays contain any common items

const containCommonItem = (arr1, arr2) => {
    let result = false;

    // O(n) solution
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result = true;
            break;
        }
    }

    return result;
}

// test cases 

console.log(containCommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])); // should return false

console.log(containCommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])); // should return true