/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
// function reverse(x: number): number {
//   const sign = Math.sign(x);
//   const min = Math.pow(-2,31);
//   const max = Math.pow(2,31)-1;

//   let res= ((Math.abs(x).toString().split('').reverse().join('')) as unknown as number) * sign;
//   if(res<min||res>max){
//     return 0
//   }
//   return res
// };


function reverse(x: number): number {
  // num | 0  ==>取整  无论正负，只移除小数点部分
  // result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断
  let result = 0;
  while(x !== 0) {
      result = result * 10 + x % 10; // 将每次取出的数字按位数相加
      x = (x / 10) | 0; // 移除最后一位数字
  }
  return (result | 0) === result ? result : 0;
};
// @lc code=end


