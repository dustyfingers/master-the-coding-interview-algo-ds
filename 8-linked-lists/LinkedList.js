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

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        this.length++;
        return this.printList()
    }

    remove(index) {
        // check params
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        const follower = unwantedNode.next;
        leader.next = follower;
        this.length--;
        return this.printList()
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(134);

myLinkedList.insert(2, 99);
myLinkedList.insert(3, 357);
// myLinkedList.remove(3);

console.log(myLinkedList.printList())

