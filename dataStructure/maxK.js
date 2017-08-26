/**
 * Created on 26/08/2017.
 */


// 变形quickSort解法
function maxK(arr, low, high, k) {
  if(k > high) return;
  var pi = partition(arr, low, high);
  if( (high - pi + 1) === k) return arr[pi];
  else if(pi < k) {
    return maxK(arr, pi+1, high, k);
  } else {
    return maxK(arr, low, pi-1, k);
  }
}

function partition(arr, low, high) {
  // 此处为了方便，我们取第一个值
  var val = arr[low];
  var index = low;
  var temp;
  for(var i=low+1; i<high; i++) {
    // 将小于val的值放在左边，交换arr[index]和arr[i], 移动index
    if(arr[i] <= val) {
      temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
      index++;
    }
  }
  arr[index] = val;
  return index;
}

var arr = [23, 10, 1, 15, 53];

maxK(arr, 0, arr.length-1, 2);