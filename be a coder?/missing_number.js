/**
 * Created on 30/08/2017.
 */

//找出连续数组中的缺失数

//给定某无序数组，其包含了 n 个连续数字中的 n - 1 个，已知上下边界，要求以O(n)的复杂度找出缺失的数字。

function missingNumber(arr, min, max) {
  var missingSum = arr.reduce((acc, num) => acc+num);
  var len = arr.length;
  var completeSum = (len+1)  * ( min + max ) / 2;
  return completeSum - missingSum;
}


var arr = [2, 3, 4, 5, 7, 8, 9];
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);

missingNumber(arr, min, max);