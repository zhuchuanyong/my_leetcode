
/**
 * @method 第一种
 * @param {*} s
 */
// export default (str) => {
//   // 字符串按空格进行分隔,保存数组
//   const arr = str.split(' ');
//   const result = arr.map((item) => {
//     // 把每一项转成数组并进行翻转
//     // 再把每一项转成字符串
//     return item.split('').reverse().join('');
//   });
//   //  把数组转成字符串返回
//   return result.join('');
// };

/**
 * @method 第一种改进
 * @param {*} s
 */
// const reverseWords = (s) => {
//   // 把每一项转成数组并进行翻转
//   // 再把每一项转成字符串
//   // 把数组转成字符串返回

//   // split(' ')可以改成 split(/\s/g)
//   return s.split(' ').map((item) => {
//     return item.split('').reverse().join('');
//   }).join(' ');
// };

/**
 * @method 第二种改进 正则
 * @param {*} s
 */
const reverseWords = (s) => {
  // 把每一项转成数组并进行翻转
  // 再把每一项转成字符串
  // 把数组转成字符串返回
  // match(/[\w’]+/g) 对’做处理
  return s.match(/[\w’]+/g).map((item) => {
    return item.split('').reverse().join('');
  }).join(' ');
};

export default reverseWords;
