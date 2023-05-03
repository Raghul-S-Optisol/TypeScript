class ListNode<T> {
    data: T;
    next: ListNode<T> | null;
  
    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;
    size: number;
  
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    add(data: T) {
      const node = new ListNode(data);
  
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail!.next = node;
        this.tail = node;
      }
  
      this.size++;
    }
  
    remove(data: T) {
      let prev = null;
      let curr = this.head;
  
      while (curr !== null) {
        if (curr.data === data) {
          if (prev === null) {
            this.head = curr.next;
          } else {
            prev.next = curr.next;
          }
  
          this.size--;
  
          return true;
        }
  
        prev = curr;
        curr = curr.next;
      }
  
      return false;
    }
  
    toArray(): T[] {
      const result: T[] = [];
      let curr = this.head;
  
      while (curr !== null) {
        result.push(curr.data);
        curr = curr.next;
      }
  
      return result;
    }
  }
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.remove(2);
list.add(4);
list.add(2);
console.log(list.toArray()); 

