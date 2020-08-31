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
    // 仅需比较最大 和最小 字符串的最长公共前缀
    let prefix='';
    if(strs.length<1){
        return  prefix
    }
    let newStrs=strs.sort((a,b)=>{
        return a.length-b.length
    })
    let min =newStrs[0];
    let max= newStrs[newStrs.length-1]
    
    for (let i = 0; i < min.length; i++) {
        const item = min[i];
        if(min[i]===max[i]){
            prefix+= min[i]
        }else {
            return  prefix
        }
        
    }
    return  prefix
    // console.log(newStrs)
    
};
// @lc code=end

// longestCommonPrefix(["flower333","flow","flight","flo"])