/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 读写指针
  // 遇到重复的元素 读指针继续前移
  // 遇到不同元素 写指针前移一步 
  const  n=nums.length;
  if(n===0){
    return 0
  }

  let fast=0;
  let show =0;
  
  while (fast<n) {
    if(nums[show]!=nums[fast]){
      show+=1
      nums[show]=nums[fast]
     
    }
    fast+=1
  }
  return show+=1
};
// @lc code=end

