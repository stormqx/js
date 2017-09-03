/**
 * Created on 02/09/2017.
 */


/**
 *
 * requestAnimationFrame（rAF）
 *
 * 近似于_.throttle(dosomething, 16)。
 *
 * 优点:
 *   1. 动画保持 60fps（每一帧 16 ms），浏览器内部决定渲染的最佳时机
 *   2. 简洁标准的 API，后期维护成本低
 *
 * 缺点:
 *   1. 动画的开始/取消需要开发者自己控制。
 *   2. 浏览器标签未激活时，一切都不会执行。这在我编写的弹幕组件中引起了bug。
 *   3. 兼容性问题。 ie9不支持。
 */

/**
 *
 * throttle: 实现节流函数。
 *
 * 常见的实现方法有两种：时间戳和定时器
 *
 * throttle的使用场景:
 *  1. 无限滚动
 *    这种场景下，.debounce就不适用了，只有当用户停止滚动的时候它才会触发。只要用户滚动至邻近底部时，我们就想获取内容。
 */



// 第一版：使用时间戳
// 这一版在开始会立即调用fn函数，接下来每隔timeout的时间调用一次
function throttle(fn, timeout) {
  var last=0;
  return function() {
    var context = this;
    var args = arguments;
    var now = +new Date();
    if((now - last) > timeout) {
      fn.apply(context, args);
      last = now;
    }
  }
}

// 第二版: 使用定时器
// 这一版会在触发函数的timeout时间后才进行调用fn函数。
function throttle(fn, timeout) {
  var timeID;
  return function() {
    var context = this;
    var args = arguments;
    if(!timeID) {
      timeID = setTimeout(function() {
        fn.apply(context, args);
        timeID = null;
      }, timeout);
    }

  }
}

// 第三版： 兼备第一版和第二版的功能。在刚触发时立即调用fn函数。触发结束后timeout时间再调用一次
function throttle(fn, timeout) {
  var timeID;
  var last=0;
  return function() {
    var context = this;
    var args = arguments;
    var now = +new Date();
    if((now - last) < timeout) {
      clearTimeout(timeID);
      timeID = setTimeout(function() {
        fn.apply(context, args);
        last = now;
      }, timeout);
    } else {
      fn.apply(context, args);
      last = now;
    }

  }
}