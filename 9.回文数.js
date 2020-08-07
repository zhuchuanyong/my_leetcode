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

    return x.toString() == x.toString().split("").reverse().join("");


};
// @lc code=end

