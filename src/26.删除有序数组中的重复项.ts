/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  // 有序数组
  // 当慢指针值 与快指针值不同时
  // 慢指针 前进一位
  // 将快指针值放入慢指针值的位置
  // 每次循环 快指针后前进一位
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let show = 0;
  let fast = 0;
  while (fast < n) {
    if (nums[show] !== nums[fast]) {
      show += 1;
      nums[show] = nums[fast];
    }
    fast += 1;
  }
  return (show += 1);
}
// @lc code=end
