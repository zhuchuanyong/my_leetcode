/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const len =digits.length;
  // 倒循环
  for (let i = len-1; i >=0; i--) {
    digits[i]++; // 加一
    digits[i]=digits[i] % 10 // 取余数
    if(digits[i] !==0){ 
      // 如果不是0，则不用继续加 直接返回
      // 如果是 则继续循环 进位计算（个位到十位）
      return digits
    }
  }

  // 循环之后没有返回值,说明是（999-->1000）这类情况 需要进位
  digits=[...Array(len+1)].map(()=>{return 0});
  digits[0]=1;
  return digits;
};
// @lc code=end

