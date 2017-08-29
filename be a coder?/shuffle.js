/**
 * Created on 30/08/2017.
 */

// 洗牌算法


// 随机选择数组中的一个数放入新数组中，时间复杂度: O(n^2)
function shuffle(arr) {
  var newArr = [];
  var random;
  while(arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    newArr.push(arr[random]);
    arr.splice(random, 1);
  }
  return newArr;
}

//在原数组上进行交换元素的操作，时间复杂度为n
function shuffle(arr) {
  var len = arr.length;
  var randomIndex, tmp;
  while (len > 1) {
    randomIndex = Math.floor(Math.random() * len);
    len--;
    tmp = arr[randomIndex];
    arr[randomIndex] = arr[len];
    arr[len] = tmp;
  }
  return arr;
}