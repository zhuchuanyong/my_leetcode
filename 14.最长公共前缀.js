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
    strs.sort((a,b)=> a-b);
    let res='';
    let  str=strs[0];
    for (let i = 0; i < str.length; i++) {
        // 循环数组  比较 item[i]  str[i] 
        // 存在flag 说明公共前缀有 当前这个字符
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

