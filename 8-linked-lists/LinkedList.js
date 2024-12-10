class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        const prevTail = this.tail;
        this.tail = newNode;
        prevTail.next = this.tail;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        const prevHead = this.head;
        this.head = newNode;
        this.head.next = prevHead;
        this.length++;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(134);

console.log(myLinkedList)

