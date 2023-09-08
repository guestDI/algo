class NewNode {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++
  
      return this
    }
  
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode
      this.length++
  
      return this
    }
  
    insert(index, value) {
      if(index === 0){
        this.prepend(value)
      } else if (index >= this.length - 1){
        this.append(value)
      } else {
        const newNode = {
          value: value,
          next: null
        }
  
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.print()
      }
    }

    remove(index) {
        if(index === 0){
          this.head = this.head.next
          this.length--;
        } else if (index === this.length - 1){
          const leader = this.traverseToIndex(index - 1)
          leader.next = null;
          this.length--;
        } else {
          const leader = this.traverseToIndex(index - 1)
          const pointer = leader.next
          leader.next = pointer.next;
          this.length--;
        }
    
        return this
      }
  
    traverseToIndex(index) {
      let ind = 0;
      let currentNode = this.head;
  
      while(ind !== index) {
        currentNode = currentNode.next;
        ind++;
      }
  
      return currentNode
    }

  reverse() {
    if(!this.head.next) {
      return this.head
    }

    const len = this.length;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first

    return this
  }
  
    print() {
      const array = []
      let currentNode = this.head;
      while(currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  // myLinkedList.insert(0, 13);
  myLinkedList.insert(1, 25);
myLinkedList.reverse()
  console.log(myLinkedList)