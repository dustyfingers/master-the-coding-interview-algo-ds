const firstRecurringCharacter = (arr) => {
    const occuranceHash = {};
    for (let i = 0; i < arr.length; i++) {
        if (occuranceHash[arr[i]]) return arr[i];
        else occuranceHash[arr[i]] = 1;
    }
    return undefined;
}

console.log(firstRecurringCharacter([1, 2, 3, 4, 5, 5, 6, 7])) // returns 5
console.log(firstRecurringCharacter([1, 2, 3, 4, 5, 6, 7])) // returns undefined