/**
 * Created on 19/08/2017.
 */


/**
 * lazyman-promise version
 *
 *
 * lazyMan('qx').eat('apple').sleep(5).play('football')
 *
 *
 * console:
 *   qx eat an apple
 *   wait 5 seconds
 *   qx play football
 *
 *
 * ------------------
 *
 * lazyMan('qx).eat('apple').sleepFirst(5).play('football')
 *
 * console:
 *   wait 5 seconds
 *   qx eat an apple
 *   qx play football
 *
 *
 * -------------------
 *
 * 解题思路：
 *   实际上就是"红绿灯" + 链式调用的变形。
 */




function LazyMan(name) {
  this.promise = Promise.resolve(name);
}

LazyMan.prototype.next = function(cb) {
  this.promise = this.promise.then((value) => new Promise((resolve) => {
    cb(resolve, value);
  }))
};

LazyMan.prototype.eat = function(thing) {
  function _eat(resolve, value) {
    console.log(`${value} eat ${thing}`);
    resolve(value);
  }

  this.next(_eat);
  return this;
};

LazyMan.prototype.sleep = function(timeout) {
  function _sleep(resolve, value) {
    console.log(`${value} sleep ${timeout}s`);
    setTimeout(function() {
      resolve(value);
    }, timeout * 1000);
  }

  this.next(_sleep);
  return this;
};

LazyMan.prototype.play = function(thing) {
  function _play(resolve, value) {
    console.log(`${value} play ${thing}`);
    resolve(value);
  }

  this.next(_play);
  return this;
};

function lazyMan(name) {
  return new LazyMan(name);
}

lazyMan('qx').eat('apple').sleep(5).play('football');