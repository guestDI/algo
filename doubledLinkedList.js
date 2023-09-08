class DoubledLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        previous: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null,
        previous: null
      }
      newNode.previous = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++
  
      return this
    }
  
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        previous: null
      }
      newNode.next = this.head;
      this.head.previous = newNode
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
          next: null,
          previous: null
        }
  
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.previous = leader
        newNode.next = follower;
        follower.previous = newNode
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
  
  let myLinkedList = new DoubledLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  // myLinkedList.insert(0, 13);
  myLinkedList.insert(1, 25);
  // myLinkedList.remove(0)
  // myLinkedList.remove(3)
  console.log(myLinkedList.print())
  // console.log(myLinkedList)
  
  
  