/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
// function maxProfit(prices: number[]): number {
//   let maxPrices = 0; // 记录最大利益
//   // 循环数组

//   for (let i = 0; i < prices.length - 1; i++) {
//     // 双循环  当前值 与之后的每一个值比较
//     for (let j = i + 1; j < prices.length; j++) {
//       const profit = prices[j] - prices[i]; // 收益
//       if (profit > maxPrices) {
//         maxPrices = profit;
//       }
//     }
//   }

//   return maxPrices;
// }

function maxProfit(prices: number[]): number {
  let max = 0;
  let minPrice = prices[0]; // 最小价格
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    //  记录的最大利润 与（当前价格-当前最低购买价格）之间取最大值
    max = Math.max(max, prices[i] - minPrice);
  }
  return max;
}
// @lc code=end
