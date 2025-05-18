//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(arr) { console.log(arr.join(' ')); }

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.longestSubarray(arr, k);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestSubarray(arr, k) {
        // code here
        const preSumMap=new Map();
        let maxLen=0;
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
            if(sum===k){
                maxLen=Math.max(maxLen,i+1);
            }
            let rem=sum-k;
            if(preSumMap.has(rem)){
                maxLen=Math.max(maxLen,i-preSumMap.get(rem));
            }
            preSumMap.set(sum,i);
            
            
        }
        
        return maxLen;
        
    }
}
