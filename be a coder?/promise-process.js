/**
 * Created on 26/08/2017.
 */

// 网易内推
// 有三个函数a、b、c, 分别返回三个promise，实现顺序控制:  a -> b -> c

function a() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('a');
      resolve();
    } ,1000)
  })
}

function b() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('b');
      resolve();
    } ,1000)
  })
}

function c() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('c');
      resolve();
    } ,1000)
  })
}

var promise = Promise.resolve();

promise.then(a).then(b).then(c)