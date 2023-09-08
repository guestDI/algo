const mergeSortedArrays = (array1, array2) => {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    if(!Array.isArray(array1) || !Array.isArray(array2)){
      throw new Error('one of the params is not an array')
    }
  
    if(!array1.length && array2.length) {
      return array2
    } else if (array1.length && !array2.length) {
      return array1
    }
  
    while (array1Item || array2Item) {
      if(!array2Item || array1Item < array2Item){
        mergedArray.push(array1Item)
        array1Item = array1[i]
        i++;
      } else {
        mergedArray.push(array2Item)
        array2Item = array2[j]
        j++;
      }
    }
    
    return mergedArray
  }