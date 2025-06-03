// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}

//     BruteForce Approach -> T.C -> O[n]

// */
// var searchRange = function(nums, target) {
//     let first=-1,last=-1;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===target){
//             if(first===-1){
//                 first=i;
//             }
//             last=i;
//         }
//     }

//     return [first,last];

// };
// ----------------------------------------------
// Better approach with O[log n] time complexity
// ----------------------------------------------

// --------------------------------------------------------------------


/*

var searchRange = function (nums, target) {
  const lb = lowerBound(nums, target);
  if (lb === nums.length || nums[lb] !== target) {
    return [-1, -1];
  } else {
    return [lb, upperBound(nums, target) - 1];
  }
};

const lowerBound = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
const upperBound = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

*/
// --------------------------------------------------------------------

// In case you cant use lower bound and upper bound concept then use only binery search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const fst=first(nums,target);
    if(fst===-1){
        return [-1,-1];
    }
    const lst=last(nums,target);
    return [fst,lst];

};
const first=function(nums,target){
    let fst=-1;
    let low=0,high=nums.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]===target){
            fst=mid;
            high=mid-1;
        }else if(nums[mid]>target){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return fst;
}
const last=function(nums,target){
    let lst=-1;
    let low=0,high=nums.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]===target){
            lst=mid;
            low=mid+1;
        }else if(nums[mid]>target){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return lst;
}






