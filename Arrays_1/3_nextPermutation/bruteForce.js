/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n=nums.length;
    let idx=-1;
    for(let i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            idx=i;
            break;
        }
    }
    if(idx===-1){
        nums.reverse();
        return;
    }
    for(let i=n-1;i>=idx;i--){
        if(nums[i]>nums[idx]){
            [nums[i],nums[idx]]=[nums[idx],nums[i]]
            break;
        }
    }
    
    nums.splice(idx + 1, n - idx - 1, ...nums.slice(idx + 1).reverse());
};