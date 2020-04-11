/*
 * @Author: zhuchuanyong
 * @Date: 2020-04-11 22:40:16
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-04-11 23:37:34
 * @FilePath: \code\array\914卡牌分组.js
 */
const hasGroupsSizeX = (arr) => {
  // 当数组项少于2项时直接返回false
  if (arr.length <= 1) {
    return false;
  }
  // 先给数组排序 升序降序无所谓
  arr.sort((a, b) => a - b);
  // 先定义最小值
  // Number.MAX_SAFE_INTEGER js表示的最大值
  let min = Number.MAX_SAFE_INTEGER;

  // 保存所有分组
  const dsl = [];

  // 定义返回结果
  let result = true;

  const tmp = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const element = arr[i];
    tmp.push(element);
    for (let j = i + 1; j < len - 1; j++) {
      if (element === arr[j]) {
        tmp.push(arr[j]);
      } else {
        if (min > tmp.length) {
          min = tmp.length;
        }
        dsl.push([].concat(tmp));
        // 对数组清空 用length=0
        tmp.length = 0;
        i = j;
        break;
      }
    }
  }
  // 检查 分组是否都是最小分组的整数倍
  dsl.every(item => {
    if (item.length % min !== 0) {
      result = false;
      return false;
    }
  });
  return result;
};
// hasGroupsSizeX([1, 1]);
export default hasGroupsSizeX;
