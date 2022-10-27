/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 如果为奇数 直接返会 false
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }

  // 使用哈希映射
  const pairs = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  // 储存左边括号
  const stk = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    // 右括号
    if (pairs.has(item)) {
      // 是右括号 stk中没有左括号 返回false
      // 是右括号 stk中有左括号 与stk中最后一项比较是否匹配 , 不匹配返回false ,匹配则去掉最后一项
      if (!stk.length || stk[stk.length - 1] !== pairs.get(item)) {
        return false;
      }
      stk.pop();
    } else {
      // 左括号
      stk.push(item);
    }
  }

  return !stk.length;
};
// @lc code=end
