class MyArray {
    constructor() {
      this._length = 0;
      this.data = {}
    }
  
    get length() {
      return this._length;
    }
  
    get(index) {
      return this.data[index]
    }
  
    push(element) {
      this.data[this._length] = element;
      this._length++;
      return this._length;
    }
  
    pop() {
      const element = this.data[this._length-1];
      delete this.data[this._length-1];
      this._length--;
      return element;
    }
  
    shift() {
      const element = this.data[0];
  
      this.shiftItems()
      
      this._length--;
  
      return element
    }
  
    shiftItems() {
      for(let i=0; i < this._length-1; i++){
        this.data[i] = this.data[i+1]
      }
  
      delete this.data[this._length-1];
    }
  }