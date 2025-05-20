/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
    let low=0,mid=0,high=arr.length-1;
    while(mid<=high){
        if(arr[mid]===0){
            [arr[mid],arr[low]]=[arr[low],arr[mid]];
            mid++;
            low++;
        }
        else if(arr[mid]===1){
            mid++;    
        }
        else{
            [arr[mid],arr[high]]=[arr[high],arr[mid]];
            high--;
        }
        
    }




};