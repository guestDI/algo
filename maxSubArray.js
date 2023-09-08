// Maximum Subarray
/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Examples:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

*/
/**
 * @param {number[]} nums
 * @return {number}
 * */
var maxSubArray = function(nums) {
    let max = nums[0];
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max + nums[i]);
        temp = Math.max(temp, max);
    }
    return temp;
};

const maxSubArray = (nums) => {
    let maxSum = Number.MIN_SAFE_INTEGER;
  
    for (let i = 0; i < nums.length; i++) {
      let currentSubArraySum = 0;
  
      for (let j = i; j < nums.length; j++) {
        currentSubArraySum += nums[j];
        maxSum = Math.max(maxSum, currentSubArraySum);
      }
    }
  
    return maxSum;
  };


  const maxSubArray = (nums) => {
    const leftIndex = 0;
    const rightIndex = nums.length - 1;
  
    return findMaxSubArraySum(nums, leftIndex, rightIndex);
  };
  
  function findMaxSubArraySum(nums, left, right) {
    // Check on empty array.
    if (left > right) {
      return Number.MIN_SAFE_INTEGER;
    }
  
    let mid = Math.floor((left + right) / 2);
    let currSum = 0;
    let maxLeftSum = 0;
    let maxRightSum = 0;
  
    // Iterate from the middle to the beginning.
    for (let i = mid - 1; i >= left; i--) {
      currSum += nums[i];
      maxLeftSum = Math.max(maxLeftSum, currSum);
    }
  
    // Reset currSum and iterate from the middle to the end.
    currSum = 0;
    for (let i = mid + 1; i <= right; i++) {
      currSum += nums[i];
      maxRightSum = Math.max(maxRightSum, currSum);
    }
  
    // The maxSum uses the middle element and the best possible sum from each half.
    let maxSum = nums[mid] + maxLeftSum + maxRightSum;
  
    // Find the max sum subarray possible from both halves.
    const leftHalf = findMaxSubArraySum(nums, left, mid - 1);
    const rightHalf = findMaxSubArraySum(nums, mid + 1, right);
  
    return Math.max(maxSum, Math.max(leftHalf, rightHalf));
  }  