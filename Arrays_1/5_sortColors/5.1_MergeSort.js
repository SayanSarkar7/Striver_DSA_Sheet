/**
 * https://leetcode.com/problems/sort-colors/submissions/1625675245/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function mergeSort(nums, low, high) {
        if (low >= high) return;

        const mid = Math.floor((low + high) / 2);
        mergeSort(nums, low, mid);
        mergeSort(nums, mid + 1, high);
        merge(nums, low, mid, high);
    }

    function merge(nums, low, mid, high) {
        const temp = [];
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                temp.push(nums[left++]);
            } else {
                temp.push(nums[right++]);
            }
        }

        while (left <= mid) temp.push(nums[left++]);
        while (right <= high) temp.push(nums[right++]);

        for (let i = 0; i < temp.length; i++) {
            nums[low + i] = temp[i];
        }
    }

    mergeSort(nums, 0, nums.length - 1);
};