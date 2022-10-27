/*
 * @Author: zhuchuanyong
 * @Date: 2020-08-12 14:33:25
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-30 10:40:52
 * @FilePath: \9.回文数.js
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // let sign =Math.sign(x);
    // if(sign<0){
    //     return false
    // }
    // let reverse=x.toString().split('').reverse().join('')
    // let abs=Math.abs(reverse)
    // if(abs.toString().legnth!==x.toString().legnth){
    //     return false
    // }
    // if(reverse==x){
    //     return true
    // }else {
    //     return false
    // }

    //  翻转参数后进行比较
    return x.toString() == x.toString().split("").reverse().join("");


};
// @lc code=end

