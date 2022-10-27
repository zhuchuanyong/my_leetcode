/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  // sum是 和的意思(当前元素之前最大子数组的和)， ans 是用来记录sum的最大值，因为sum会一直变化
  // 从开始遍历， 负数肯定是不会产生增益的
  // 当sum < 0 时， 就已经没有再往后加的必要了，这个时候直接把下一个值拿过来赋值给sum
  // 当sum > 0 时， 就可以对后面的数产生增益，所以给他加上
  // 加完之后 比较一下sum和ans的大小， 取最大值
  // 如此循环
  let ans = nums[0]; //和的最大值
  let sum = 0; // 和
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};
// @lc code=end
