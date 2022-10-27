/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let maxPrices = 0; // 记录最大利益
  // 循环数组

  for (let i = 0; i < prices.length - 1; i++) {
    // 双循环  当前值 与之后的每一个值比较
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i]; // 收益
      if (profit > maxPrices) {
        maxPrices = profit;
      }
    }
  }

  return maxPrices;
}
// @lc code=end
