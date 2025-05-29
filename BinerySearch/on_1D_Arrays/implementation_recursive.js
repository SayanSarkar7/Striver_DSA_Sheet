/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n=nums.length;
    let low=0,high=n-1;
    const result=bsIndex(nums,low,high,target);
    return result;
};

let bsIndex=function (nums,low,high,target){
    if(low>high) return -1;
    let mid=Math.floor((low+high)/2)
    if(nums[mid]===target) return mid;
    else if(target > nums[mid]) return bsIndex(nums,mid+1,high,target);
    return bsIndex(nums,low,mid-1,target);
}



