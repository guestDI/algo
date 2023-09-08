const reverseString = (str) => {
    const arrayStr = str.split('')
    const resultArray = []
  
    for(let i = arrayStr.length-1; i >= 0; i--){
      resultArray.push(arrayStr[i])
    }
    
    return resultArray.join('')
  }
  
const reverseString2 = str => [...str].reverse().join('')