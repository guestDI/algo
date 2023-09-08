// implementHashTable

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(i=0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if(currentBucket){
           for(i = 0; i < currentBucket.length; i++) {
            if(currentBucket[i][0] === key){
                return currentBucket[i][1]
            }
           }
        }
        return []
    }

    keys() {
        const arrayKeys = []
        for(i = 0; i < this.data.length; i++) {
            if(this.data[i]){
                arrayKeys.push(this.data[i][0][0])
            }
        }

        return arrayKeys
    }

    keysWithCollisions() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }
}


// first reccuring character O(n)
const firstReccuringCharacter = (arr) => {
    const map = {}
    for(i = 0; i < arr.length; i++) {
        if(map[arr[i]]){
            return arr[i]
        } else {
            map[arr[i]] = true
        }
    }
}