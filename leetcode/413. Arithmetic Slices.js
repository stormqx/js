/**
 * Created on 19/08/2017.
 */


/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  var len = A.length;
  if(len < 3) return 0;
  var dp = [];
  var diff;
  var count = 0;
  for(var i=0; i<len; i++) {
    dp[i] = [];
  }

  for(var i=0; i<len; i++) {
    for(var j=i+1; j<len; j++) {
      if((i+1) === j) dp[i][j] = A[j] - A[i];
      else {
        diff = A[j] - A[j-1];
        if(diff === dp[i][j-1])  {
          dp[i][j] = diff;
          if((j-i) >= 2) count++;
        }
      }
    }
  }
  return count;
};