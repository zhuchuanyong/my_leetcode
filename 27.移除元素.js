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
var removeElement = function(nums, val) {
    let resNum=0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        
        if(val!==element){
            nums[resNum]=element
            resNum++;
        }
    }
    return resNum
};
// @lc code=end

