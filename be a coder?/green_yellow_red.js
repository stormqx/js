/**
 * Created on 19/08/2017.
 */

/**
 *
 * green();
 * yellow();
 * red();
 *
 *
 * 绿灯
 * 过3秒
 * 黄灯
 * 过1秒
 * 红灯
 * 过1秒
 * ...
 */

var promise = Promise.resolve();

function next(cb) {
  promise = promise.then(function () {
    return new Promise(function (resolve) {
      cb(resolve);
    })
  })
}

function green() {
  this.next(function (resolve) {
    console.log('绿灯');
    var start = new Date().getTime();
    setTimeout(function () {
      resolve();
      var end = new Date().getTime();
      console.log('---------'+ (end - start)/ 1000 + '秒---------');
    }, 3000);

  });
}

function yellow() {
  this.next(function (resolve) {
    console.log('黄灯');
    var start = new Date().getTime();
    setTimeout(function() {
      resolve();
      var end = new Date().getTime();
      console.log('---------'+ (end - start) / 1000 + '秒---------');
    }, 1000);
  });
}

function red() {
  this.next(function (resolve) {
    console.log('红灯');
    var start = new Date().getTime();
    setTimeout(function() {
      resolve();
      var end = new Date().getTime();
      console.log('---------'+ (end - start) / 1000 + '秒---------');
    }, 3000);

    // loop
    loop();
  })
}

function loop() {
  green();
  yellow();
  red();
}

loop();