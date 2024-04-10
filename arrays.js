// Two Sum
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Examples:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j=i+1; j <= nums.length; j++) {
        if(nums[i] + nums[j] === target){
            return [i, j]
        }
        }
    }
};

// using hashMap
const twoSum = function(nums, target) {
    const hashMap = new Map()
    for(let i = 0; i < nums.length; i++) {
        const lookup = target - nums[i]
        if(hashMap.has(lookup)){
            return [hashMap.get(lookup), i]
        }

        hashMap.set(nums[i], i) 
    }
};


// Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Examples:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const n = nums.length;
        let i = 0, j = 0;
        while(j < n){
            if(nums[j]==0){
                j++;
            }
            else{
                const temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
                i++;
                j++;
            }
        }
};

const moveZeroes = function(nums) {
    for (let i = nums.length - 1 ; i >= 0; i--) {
        if (nums[i] === 0) {
           const zero = nums.splice(i, 1)
           nums.push(zero)
        }
    }
    return nums
};


// Contains Duplicate
/*
Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct.

Examples:
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length
};


// Longest Word
/**
 Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
 Words may also contain numbers, for example "Hello world123 567"

 Examples:
 Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love
 */

function LongestWord(sen) { 
    const x = sen.match( /\w+/g );
    const stringsLength = x.map((word) => word.length)
  
    const wordIndex = stringsLength.indexOf(Math.max(...stringsLength)) 
  
    return x[wordIndex]
  }


  // Rotate array
  /*
  Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

  Examples:
  Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var reverse = function(arr, start, end) {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}

var rotate = function(nums, k) {
    const len = nums.length
    k = k % nums.length

    reverse(nums, 0, len - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, len - 1)
};

var rotate = function(nums, k) {
    let start = k % nums.length

    if (start === 0) {
        return nums
    } else {
        let back = nums.splice(0, nums.length - start)
        nums.splice(nums.length, 0, ...back)
        return nums
    }
    
};


/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
/*

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)]
};
