// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if(number === 0 || number === 1) {
    return 1
  }

  return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
  let answer = number;
  let index = number-1;
  if(number === 0 || number === 1) {
    return answer;
  }

  while(index > 1) {
    answer = answer * index;
    index--;
  }

  return answer;
  
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(4))
