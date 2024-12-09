// custom implementation of an array
class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

// test class
const newArray = new CustomArray();
newArray.get(0); // undefined

console.log(newArray.push('hi'));
console.log(newArray.get(0));
console.log(newArray.push('you'));
console.log(newArray.push('!'));
console.log(newArray.pop());
console.log(newArray.get(1));
