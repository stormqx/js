/**
 * Created on 30/08/2017.
 */

// 实现一个深拷贝

// 方法一：修改版浅拷贝: 注意判断各种状态, undefined, null, function和对象
// 在浅拷贝(例如: Object.assign)的基础上增加一些条件判断
function deepClone(arr) {
  if(arr === undefined || arr === null || typeof arr === 'function') {
    return arr;
  }

  var output = arr;
  if(isObject(arr)) {
    output = arr instanceof Array ? [] : {};

    for(var i in arr) {
      if(Object.prototype.hasOwnProperty.call(arr, i)) {
        output[i] = isObject(arr[i]) ? deepClone(arr[i]) : arr[i];
      }
    }
  }

  return output;
}

function isObject(obj) {
  return typeof obj === 'object';
}

// 方法二：使用JSON.stringify 和 JSON.parse来实现深拷贝
// 缺点：
//  1.效率低
//  2.会破坏原型链，构造函数会变成object
//  3.只可以处理能够被JSON表示的数据结构，不能处理function和正则等属性

function deepClone(arr) {
  return JSON.parse(JSON.stringify(obj));
}

// 方法三：直接使用lodash的cloneDeep