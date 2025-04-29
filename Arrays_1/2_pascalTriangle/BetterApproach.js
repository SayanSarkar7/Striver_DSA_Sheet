/**
 * @param {number} numRows
 * @return {number[][]}
 * Printing Full pascal triangle
 * t.c = O[n2]
 */
var generate = function(numRows) {
    let arr=[];
    for(let r=1;r<=numRows;r++){
        arr.push(generateRow(r));
    }
    return arr;
};

function generateRow(rows){
    let arr=[1];
    let ans=1;
    for(let r=1;r<rows;r++){
        ans=ans*(rows-r);
        ans=ans/r;
        arr.push(ans)
    }
    return arr;
}