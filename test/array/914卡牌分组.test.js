/*
 * @Author: zhuchuanyong
 * @Date: 2020-04-11 23:13:42
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-04-11 23:25:08
 * @FilePath: \test\array\914卡牌分组.test.js
 */

import hasGroupsSizeX from '../../code/array/914卡牌分组';
test('914. 卡牌分组', () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
});

test('914. 卡牌分组2', () => {
  expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
});

test('914. 卡牌分组3', () => {
  expect(hasGroupsSizeX([1])).toBe(false);
});

test('914. 卡牌分组4', () => {
  expect(hasGroupsSizeX([1, 1])).toBe(true);
});

test('914. 卡牌分组5', () => {
  expect(hasGroupsSizeX([1, 1, 2, 2, 2, 2])).toBe(true);
});
