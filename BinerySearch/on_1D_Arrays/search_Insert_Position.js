/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.lengrth - 1;
  let ans = nums.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) ans = mid;
    else if (nums[mid] >= target) low = mid + 1;
    else high = mid - 1;
  }
  if (ans !== nums.length) return ans;
  (low = 0), (high = nums.length - 1);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // implementing lower bound
    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
