/**
 * @param {number} numRows
 * @return {number[][]}
 * Print Entire Pascle Triangle
 * t.c = O[n3]
 */
var generate = function (numRows) {
  let arr = [];

  for (let r = 1; r <= numRows; r++) {
    let tempArr = [];
    for (let c = 1; c <= r; c++) {
      let result = ncr(r - 1, c - 1);
      tempArr.push(result);
    }
    arr.push(tempArr);
  }
  return arr;
};

function ncr(n, r) {
  let temp = 1;
  for (let i = 0; i < r; i++) {
    temp = temp * (n - i);
    temp = temp / (i + 1);
  }
  return temp;
}
