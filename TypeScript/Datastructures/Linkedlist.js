class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(data) {
        const node = new ListNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    remove(data) {
        let prev = null;
        let curr = this.head;
        while (curr !== null) {
            if (curr.data === data) {
                if (prev === null) {
                    this.head = curr.next;
                }
                else {
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
    toArray() {
        const result = [];
        let curr = this.head;
        while (curr !== null) {
            result.push(curr.data);
            curr = curr.next;
        }
        return result;
    }
}
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.remove(2);
list.add(4);
list.add(2);
console.log(list.toArray());
