/**
 * Created on 19/08/2017.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let n = nums.length;
  let dp = [];
  for(let i = 0; i < n; i++) {
    dp[i] = [];
    for(let j = i; j < n; j++) {
      if(i===j) dp[i][j] = nums[i];
    }
  }
};