/**
 * Created on 31/08/2017.
 */

// 数组扁平化。

// 方法一：递归
// 因为会有多层数据，所以使用递归
function flatten(arr) {
  var result = [];
  for(var i=0; i<arr.length; i++) {
    result = result.concat(Array.isArray(arr[i]) ? flatten(arr[i]) : arr[i]);
  }
  return result;
}


// 方法二：toString()
// 如果数组中的数据都是数字，可以考虑该方法
function flatten(arr) {
  return arr.toString().split(',').map((item) => +item);
}


// 方法三：使用reduce来简化for循环
function flatten(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, [])
}


// 方法四：使用...
function flatten(arr) {

  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }

  return arr;
}


// underscore的实现，实现中有更多其他配置是为了方便其他api调用
/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素，下面有解释
 * @param  {Array} output  这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
function flatten(input, shallow, strict, output) {
  // underscore没有使用concat, 仅使用了单个数组在递归中传递。
  output = output || [];
  var idx = output.length;

  for(var i=0, len=input.length; i<len; i++) {

    var value =input[i];
    // 如果是数据，进行处理
    if(Array.isArray(value)) {
      if(shallow) {
        // 只进行一层扁平化
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      } else {
        // 多层扁平化
        flatten(value, shallow, strict, output);
        idx = output.length;
      }
    } else if(!strict) {
      // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
      output[idx++] = value;
    }
  }

  return output;
}



var arr = [1, 2, [3, 4, [5,6]], [7 ,8]];

flatten(arr);