// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    lowerBound(arr, target) {
        // your code here
        let low=0,high=arr.length-1;
        let ans=arr.length;
        while(low<=high){
            let mid=Math.floor((low+high)/2);
            if(arr[mid]>=target){
                ans=mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }
            
        }
        return ans;
        
        
    }
}