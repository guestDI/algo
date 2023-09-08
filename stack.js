  // using linked list
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value) {
      const newNode = new Node(value);
      if (!this.length) {
        this.top = newNode;
        this.bottom = this.top;
      } else {
        newNode.next = this.top
        this.top = newNode
      }
  
      this.length++;
      return this;
    }
    pop() {
      if (this.length) {
        this.top = this.top.next;
        this.length--;
      }
      if(this.top === this.bottom){
        this.bottom = null
      }

      return this;
    }
    isEmpty() {
      return !this.length;
    }
  }
  
  const myStack = new Stack();
  myStack.push('google')
  myStack.push('Udemy')
  myStack.push('Discord')
  
  console.log(myStack.isEmpty())
  console.log(myStack)
  
  myStack.pop()
  console.log(myStack)
  
  //Discord
  //Udemy
  //google
  


  //using arrays 
  class Stack {
    constructor() {
      this.stack = [];
    }
    peek() {
      return this.stack[this.stack.length-1];
    }
    push(value) {
      this.stack.push(value);
      return this;
    }
    pop() {
      this.stack.pop()

      return this;
    }
    isEmpty() {
      return !this.stack.length;
    }
  }