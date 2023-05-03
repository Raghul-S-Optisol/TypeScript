class Stack<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    size(): number {
      return this.items.length;
    }
  }

  const stack = new Stack<string>();
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