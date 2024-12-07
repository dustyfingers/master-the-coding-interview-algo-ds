const strings = ['a', 'b', 'c', 'd'];

// storing 4 items on a 32 bit system, 4 items at 4 shelves of memory each - 16 bytes.

// access
strings[2]

// insertion
strings.push('e') // O(1)

// deletion
strings.pop() // O(1)

// add to beginning of array
strings.unshift('x') // O(n) - need to reassign all indexes

strings.splice(2, 0, 'alien') // O(n) - need to reassign all indexes in worst cases

console.log(strings)