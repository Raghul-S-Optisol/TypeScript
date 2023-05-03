class Queue<T> {
    private data: T[] = [];
  
    enqueue(item: T): void {
      this.data.push(item);
    }
  
    dequeue(): T | undefined {
      return this.data.shift();
    }
  
    peek(): T | undefined {
      return this.data.length ? this.data[0] : undefined;
    }
  
    isEmpty(): boolean {
      return this.data.length === 0;
    }
  
    clear(): void {
      this.data = [];
    }
  
    size(): number {
      return this.data.length;
    }
  }


  const queue = new Queue<string>();

queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("cherry");

console.log(queue.dequeue()); // output: "apple"

console.log(queue.peek()); // output: "banana"

console.log(queue.isEmpty()); // output: false

console.log(queue.size()); // output: 2

queue.clear();

console.log(queue.isEmpty()); // output: true