class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value) {
      const newNode = new Node(value);
      if (!this.length) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode
        this.last = newNode
      }
  
      this.length++;
      return this;
    }
    dequeue() {
      if (!this.first) {
        return null
      }
      if (this.first === this.last) {
        this.last = null
      }
      if (this.length) {
        this.first = this.first.next;
        this.length--;
      }
  
      return this;
    }
    isEmpty() {
      return !this.length;
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue("Joy")
  myQueue.enqueue("Matt")
  myQueue.enqueue("Pavel")
  myQueue.enqueue("Samir")
  
  
  
  console.log(myQueue)
  myQueue.dequeue()
  
  console.log(myQueue)
  //Joy
  //Matt
  //Pavel
  //Samir
  
  // Queue using two stacks
  const MyQueue = function() {
    this.stack1 = []
    this.stack2 = []

    this.moveItems = function(){
        if (this.stack2.length === 0) {
            while(this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
    }
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.stack1.length && !this.stack2.length) {
        return -1;
    }
 
    this.moveItems()

    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.moveItems()
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length;
};