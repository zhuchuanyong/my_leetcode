/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let maxans = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    maxans = Math.max(maxans, sum);
  }
  return maxans;
}
// @lc code=end
