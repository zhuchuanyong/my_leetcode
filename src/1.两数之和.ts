/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    const dif = target - item;
    if (map.has(dif)) {
      return [map.get(dif), i];
    } else {
      map.set(item, i);
    }
  }
  return [];
}
// @lc code=end
