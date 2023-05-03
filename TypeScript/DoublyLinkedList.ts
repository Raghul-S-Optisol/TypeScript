class DoubleNode<T> {
    value: T;
    next: DoubleNode<T> | null;
    prev: DoubleNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList<T> {
    private head: DoubleNode<T> | null;
    private tail: DoubleNode<T> | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    isEmpty(): boolean {
      return this.head === null;
    }
  
    append(value: T): void {
      const node = new DoubleNode(value);
      if (this.tail === null) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
    }
  
    prepend(value: T): void {
      const node = new DoubleNode(value);
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      }
    }
  
    remove(value: T): void {
      let node = this.head;
      while (node !== null) {
        if (node.value === value) {
          if (node.prev === null) {
            this.head = node.next;
          } else {
            node.prev.next = node.next;
          }
          if (node.next === null) {
            this.tail = node.prev;
          } else {
            node.next.prev = node.prev;
          }
          break;
        }
        node = node.next;
      }
    }
  
    toArray(): T[] {
      const result: T[] = [];
      let node = this.head;
      while (node !== null) {
        result.push(node.value);
        node = node.next;
      }
      return result;
    }
  }

  const doublelist = new DoublyLinkedList<number>();
doublelist.append(1);
doublelist.append(2);
doublelist.append(3);
doublelist.remove(2);
doublelist.prepend(8); // It add the begining
doublelist.append(5);
console.log(doublelist.toArray()); 