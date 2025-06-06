/**
 * @param {number[]} nums
 * @return {number}
 * 
 * T.c -> O(n)
 */
var maxSubArray = function(nums) {
    const n=nums.length;
    let maxi = Number.MIN_SAFE_INTEGER;
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=nums[i];
        if(sum>maxi){
            maxi=sum;
        }    
        if(sum<0){
            sum=0;
        }
    }
    return maxi;
};