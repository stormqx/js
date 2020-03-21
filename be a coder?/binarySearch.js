/**
 * Created on 16/09/2017.
 */


function binarySearch(arr, key, start, end) {
  if(start > end) return -1;
  var idx = Math.floor((start + end)/2);
  if(arr[idx] === key) return idx;
  else if(arr[idx] < key) return binarySearch(arr, key, idx+1, end);
  else return binarySearch(arr, key, start, idx-1);
}