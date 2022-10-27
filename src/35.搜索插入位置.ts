/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  if (nums == null || !nums.length) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + ((end - start) >> 1); // 中位数
    if (nums[mid] > target) {
      // 如果中位数大于目标值 说明目标值在左边 则查找左边
      end = mid - 1;
    } else if (nums[mid] < target) {
      // 如果中位数小于目标值 说明目标值在右边 则查找右边
      start = mid + 1;
    } else {
      return mid;
    }
  }
  // 插入时
  // left左边的值一直保持小于target，所以返回左边
  return start;
}

searchInsert([1, 3, 6, 8, 9], 5);
// @lc code=end
