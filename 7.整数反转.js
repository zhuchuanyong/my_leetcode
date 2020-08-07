/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 获取符号  正数1 负数-1
    let sign =Math.sign(x);
    let max=Math.pow(2, 31) - 1;
    let min=Math.pow(2, 31) * -1;
    // 绝对值 -> 转字符串-> 转数组 -> 反转数组 -> 字符串 -> 加符号 -> 判断大小
    let res=(Math.abs(x).toString().split('').reverse().join(''))*sign
    if(res<min||res>max){
        res=0
    }
    return res
};
// @lc code=end

