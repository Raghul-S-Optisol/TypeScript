class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const stack = new Stack();
stack.push("one");
stack.push("two");
stack.push("three");
stack.push("five");
stack.push("two");
stack.push("six");
console.log(stack.peek()); // Output: six
console.log(stack.pop()); // Output: six
console.log(stack.size()); // Output: 5
console.log(stack.isEmpty()); // Output: false
