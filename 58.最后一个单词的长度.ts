/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  // api 战士
  const strs=s.trim().split(" ");
  return strs[strs.length-1].length;
};
// @lc code=end

