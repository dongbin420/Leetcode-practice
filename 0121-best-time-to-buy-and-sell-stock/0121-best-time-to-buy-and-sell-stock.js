/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = -Infinity;

    for (const price of prices) {
        minPrice = Math.min(price, minPrice);
        const curProfit = price - minPrice;
        maxProfit = Math.max(curProfit, maxProfit);
    } 

    if (maxProfit === 0) return 0;
    
    return maxProfit;
};