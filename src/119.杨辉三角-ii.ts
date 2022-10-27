/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  const ret: any[][] = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ret[i - 1][j] + ret[i - 1][j - 1];
    }
    ret.push(row);
  }
  return ret[rowIndex];
}
// console.log('getRow(3)', getRow(3))
// @lc code=end
