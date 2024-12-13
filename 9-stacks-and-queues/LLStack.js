class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      newNode.next = currentTop;
    }
    this.length++;
  }

  pop() {
    if (!this.top) return null;
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
  }

  isEmpty() {
    return this.top && this.bottom;
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(5);
myStack.push(16);
myStack.push(134);
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
