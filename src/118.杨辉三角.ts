/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const ret: any[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = ret[i - 1][j] + ret[i - 1][j - 1];
    }
    ret.push(row);
  }
  return ret;
}
// @lc code=end
