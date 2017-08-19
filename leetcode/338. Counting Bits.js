/**
 * Created on 19/08/2017.
 */


/**
 *
 * 解题思路: i & (i-1)去掉最后一个非零位。
 * 比如：14 -> 1110, 13 -> 1101,   1110 & 1101 -> 1100
 *
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var dp = new Array(num+1);
  dp[0] = 0;
  for(var i=1; i<=num; i++) {
    dp[i] = dp[i & (i-1)] + 1;
  }
  return dp;
};