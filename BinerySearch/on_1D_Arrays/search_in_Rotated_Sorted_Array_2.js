/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return true;
    }
    //setting low to its next and high to its previous position then holding that iteration,again calculated mid then it goes on...
    if(nums[low]===nums[mid] && nums[mid]===nums[high]){
        low++;
        high--;
        continue;
    }
    // check if left half is sorted
    if (nums[low] <= nums[mid]) {
      // so left half is sorted, now check the target lies between this range
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // so right half is sorted, now check the target lies between this range
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};