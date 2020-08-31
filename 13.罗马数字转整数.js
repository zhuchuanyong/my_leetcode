/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    // 当前值 大于等于下一个值就加上当前值
    // 反之减去 或者加上当前值的负值


    // let num = 0;
    // for (let i = 0; i < s.length; i++) {

    //     const currentNum = map[s[i]];
    //     const nextNum = map[s[i + 1]]||0;
    //     if (currentNum >= nextNum) {
    //         num += currentNum
    //     } else {
    //         num -= currentNum
    //     }
    // }
    // return num

   return  s.split('').reduce((total,cur,idx,arr)=>{
        return map[cur]<map[arr[idx+1]]?total-map[cur]:total+map[cur]
    },0)
};
// @lc code=end

