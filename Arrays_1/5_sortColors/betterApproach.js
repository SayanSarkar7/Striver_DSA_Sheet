/**
 * https://leetcode.com/problems/sort-colors/submissions/1625675245/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeros=0,ones=0,twos=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            zeros+=1;
        }else if(nums[i]===1){
            ones+=1;
        }else if(nums[i]===2){
            twos+=1;
        }
    }
    for(let i=0;i<zeros;i++){
        nums[i]=0;
    }
    
    for(let i=0;i<ones;i++){
        nums[zeros+i]=1;
    }
    
    for(let i=0;i<twos;i++){
        nums[zeros+ones+i]=2;
    }
};