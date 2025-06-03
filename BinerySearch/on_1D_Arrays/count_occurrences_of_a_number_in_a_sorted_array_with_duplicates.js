// Count occurrences of a number in a sorted array with duplicates

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
  // Function to count the occurrences of x in the array.
  countFreq(arr, target) {
    // your code here
    let op = searchRange(arr, target);
    return op;
  }
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const fst = first(nums, target);
  if (fst === -1) {
    return 0;
  }
  const lst = last(nums, target);
  return lst - fst + 1;
};
const first = function (nums, target) {
  let fst = -1;
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      fst = mid;
      high = mid - 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return fst;
};
const last = function (nums, target) {
  let lst = -1;
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      lst = mid;
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return lst;
};
