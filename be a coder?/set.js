/**
 * Created on 30/08/2017.
 */


// 两个数组并集、交集、差集 union、intersection、difference

// es5
function union(arr1, arr2) {
  return arr1.concat(
    arr2.filter((data) => arr1.indexOf(data) === -1)
  );
}

function intersection(arr1, arr2) {
  return arr1.filter((data1) => arr2.indexOf(data1) !== -1);
}

function difference(arr1, arr2) {
  return arr1.filter((data1) => arr2.indexOf(data1) === -1)
    .concat(arr2.filter((data2) => arr1.indexOf(data2) === -1));
}

// es6
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

function intersection(arr1, arr2) {
  return arr1.filter((data1) => new Set(arr2).has(data1));
}

function difference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return arr1.concat(arr2).filter(item => !set2.has(item) || !set1.has(item));
}



var arr1 = [1, 2, 3, '3', 4, '4', 5];
var arr2 = [2, 3, '3', '4', 5, 6, 7, 8];

union(arr1, arr2);
intersection(arr1, arr2);
difference(arr1, arr2);