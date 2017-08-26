/**
 * Created on 19/08/2017.
 */


// es6
function deduplicate(arr) {
  return [...new Set(arr)];
}


// es5
// 该方法有一个缺点：当数组中包含NaN的时候，indexOf返回的仍然是-1, 所以不能检测出NaN的情况
function deduplicate1(arr) {
  return arr.filter(function(item, index, array) {
    return index === array.indexOf(item);
  })
}

// 使用obj对象做hash存在问题，会将数字3转换成'3'导致只保留一个


var test = [1, 2, 3, 3, '3', '2'];

deduplicate(test);
deduplicate1(test);