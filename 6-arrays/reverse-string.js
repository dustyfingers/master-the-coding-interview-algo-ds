// create a function that reverses a string

// one liner
function reverse(str) {
    if (typeof str !== 'string' || !str) return '';
    return str.split('').reverse().join('');
}

// manual solution
function reverseManual(str) {
    if (typeof str !== 'string' || !str) return '';
    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);

    }

    return backwards.join('')
}

// console.log(reverse('Hi my name is Louie!'));

console.log(reverseManual('Heyoooo whats up my name is Louie'))

