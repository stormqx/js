/**
 * Created on 19/08/2017.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  var dp = [];
  var len = s.length;
  var count = 0;
  for(var i=0; i < len; i++) {
    dp[i] = [];
  }

  for(var i=0; i < len; i++) {
    for(var j=0; j<len; j++) {
      var start = j;
      var end = j+i;
      // 判断越界
      if(start < 0 || start >= len || end < 0 || end >= len) continue;

      if(start === end) {
        // len = 1
        dp[start][end] = true;
        count++;
        continue;
      } else if((start+1) === end) {
        // len = 2
        if(s[start] === s[end]) {
          dp[start][end] = true;
          count++;
          continue;
        } else {
          dp[start][end] = false;
        }
      } else {
        // len > 2
        if(s[start] === s[end] && dp[start+1][end-1]) {
          dp[start][end] = true;
          count++;
          continue;
        } else {
          dp[start][end] = false;
        }
      }
    }
  }
  return count;
};