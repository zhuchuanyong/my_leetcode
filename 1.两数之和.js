/*
 * @Author: zhuchuanyong
 * @Date: 2020-08-12 14:33:25
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-29 20:11:36
 * @FilePath: \1.两数之和.js
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
// /**
//  * 暴力法
//  * 使用两层循环，外层循环计算当前元素与 target 之间的差值
//  * 内层循环寻找该差值，若找到该差值，则返回两个元素的下标
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  *  
//  */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const item = nums[i];
//         const dif = target - item; // 差

//         // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
//         // 内层必定比外层至少大于1 
//         for (let j = i + 1; j < nums.length; j++) {
//             if(nums[j]===dif){
//                 return [i,j]
//             }
//         }
//     }
// };



/**
 * 使用map
 * map 也可以换成对象
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *  
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        let dif = target - item // 计算目标值与当前值得差

        // 在map里查找dif  dif的值 和 i 就是要返回的结果
        let difIndex=map.get(dif)  // map.get 取不到会返回undefined

        // if(difIndex) 不能这样判断 map 的第一个值会是0
        if(difIndex!==undefined){
            return [difIndex,i]
        }
        //找不到   用map存当前  值,索引
        map.set(nums[i], i)
    }
};
// @lc code=end

