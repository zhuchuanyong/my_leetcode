/*
 * @Author: zhuchuanyong
 * @Date: 2020-08-31 13:33:05
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-12-30 11:24:17
 * @FilePath: \14.最长公共前缀.js
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    // 数组长度为0 直接返回''
    if(strs.length<=0){
        return ''
    }
    // strs.sort((a,b)=> a-b); 这步好像没什么用
    let res='';
    let  str=strs[0];
    for (let i = 0; i < str.length; i++) {
        // 循环数组 循环比较每一项,查看每一项字符是否一致相等   item[i]  str[i] 
        // 相等存在flag 说明公共前缀有 当前这个字符
        // 把字符加到公共前缀中
       let flag= strs.every(item=>item[i]==str[i])
       if(flag){
           res+=str[i]
       }else {
           return res;
       }
        
    }
    return res
};
// @lc code=end

