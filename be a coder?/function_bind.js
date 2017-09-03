/**
 * Created on 31/08/2017.
 */

// 手动实现bind函数.

// 第一版。 实现函数绑定和参数传递
// 传参需要注意的地方：bind的时候可以传参，返回的函数也可以传参
Function.prototype.bind = Function.prototype.bind || function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var self = this;
  return function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context, bindArgs.concat(args));
  }
};


// 第二版。 实现new操作符的特点。
//
// 绑定函数最难的点:
// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。
// 提供的 this值被忽略，同时调用时的参数被提供给模拟函数。

// 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。
Function.prototype.bind = Function.prototype.bind || function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var self = this;
  var bound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof bound ? this : context, bindArgs.concat(args));
  };
  bound.prototype = this.prototype;
  return bound;
};


// 第三版。 优化。
// 第二版使用bound.prototype = this.prototype. 导致修改bound.prototype直接影响到了this.prototype.
// 所以我们需要使用一个中转函数。

// 在加上类型判断


Function.prototype.bind = Function.prototype.bind || function(context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var args = Array.prototype.slice.call(arguments, 1);
  var self = this;
  var bound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof bound ? this : context, bindArgs.concat(args));
  };

  var f = function() {};
  f.prototype = this.prototype;
  bound.prototype = new f();

  return bound;
};
