/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 返回长度即可 不需要真删除元素
  // 记录要移除的位置 将需要保留的元素赋值到该位置， 要删除的元素会排在数组后半部分
  let resNum = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (val !== element) {
      nums[resNum] = element;
      resNum++;
    }
  }
  return resNum;
};
// @lc code=end
