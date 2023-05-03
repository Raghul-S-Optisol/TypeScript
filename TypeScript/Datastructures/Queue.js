class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(item) {
        this.data.push(item);
    }
    dequeue() {
        return this.data.shift();
    }
    peek() {
        return this.data.length ? this.data[0] : undefined;
    }
    isEmpty() {
        return this.data.length === 0;
    }
    clear() {
        this.data = [];
    }
    size() {
        return this.data.length;
    }
}
const queue = new Queue();
queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("cherry");
console.log(queue.dequeue()); // output: "apple"
console.log(queue.peek()); // output: "banana"
console.log(queue.isEmpty()); // output: false
console.log(queue.size()); // output: 2
queue.clear();
console.log(queue.isEmpty()); // output: true
