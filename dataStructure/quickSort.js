/**
 * Created on 26/08/2017.
 */

function quickSort(arr, low, high) {
  if(low >= high) return;

  // 寻找划分点
  var pi = partition(arr, low, high);

  quickSort(arr, low, pi-1);
  quickSort(arr, pi+1, high);
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

quickSort(arr, 0, arr.length-1);
