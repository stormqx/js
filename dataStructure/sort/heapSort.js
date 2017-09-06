/**
 * Created on 03/09/2017.
 */


/**
 * 实现一个堆排序
 * 升序排列使用大根堆，降序排列使用小根堆
 */

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 向下调整
function maxHeapify(arr, i, length) {
  while(true) {
    var left = i*2+1;
    var right = i*2+2;
    var largest = i;
    if(left < length && arr[largest] < arr[left]) {
      largest = left;
    }

    if(right < length && arr[largest] < arr[right]) {
      largest = right;
    }

    if(largest === i) {
      break;
    }

    swap(arr, i, largest);
    i = largest;
  }
}

function buildHeap(arr) {
  var len = arr.length;
  var idx = Math.floor((len-1) / 2);
  for(var i = idx; i>=0; i--) {
    maxHeapify(arr, i, len);
  }
}

function heapSort(arr) {
  buildHeap(arr);

  for(var i=arr.length-1; i>0; i--) {
    swap(arr, 0, i);

    maxHeapify(arr, 0, i-1);
  }
  return arr;
}


var arr = [23, 10, 1, 15, 53, 100, 23, -1, 45, 82, 98, 47, 46];

heapSort(arr);