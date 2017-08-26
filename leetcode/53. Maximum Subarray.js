/**
 * Created on 19/08/2017.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(arr) {
  var dp = [];
  var max = arr[0];
  dp[0] = arr[0];
  for(var i=1; i<arr.length; i++) {
    dp[i] = dp[i-1] > 0 ? (dp[i-1]+arr[i]) : arr[i];
    max = Math.max(max, dp[i]);
  }
  return max;
};