/**
 * Created on 31/08/2017.
 */

// throttle 和 debounce 是解决请求和响应速度不匹配问题的两个方案。


// 假设电梯有两种运行策略 throttle 和 debounce ，超时设定为15秒，不考虑容量限制。
// throttle 策略的电梯。保证如果电梯第一个人进来后，15秒后准时运送一次，不等待。如果没有人，则待机。
// debounce 策略的电梯。如果电梯里有人进来，等待15秒。如果又人进来，15秒等待重新计时，直到15秒超时，开始运送。



/**
 *
 * debounce: 实现防抖函数。等待事件触发后等一段时间再执行，如果触发频率高于设定的延迟时间，就一直等下去
 *
 * 参考underscore的源码
 *
 * debounce的使用场景:
 *  1. 基于 AJAX 请求的自动完成功能，通过 keypress 触发
 *  2. 窗口的resize
 *  3. 等待用户输入信息完成后，才验证输入的正确性
 */



// 版本一
function debounce(fn, timeout) {
  var timeID;
  return function() {
    clearTimeout(timeID);
    timeID = setTimeout(fn, timeout);
  }
}

// 版本二
// 如果使用版本一中的debounce函数中调用this的话，this会永远指向window.
function debounce(fn, timeout) {
  var timeID;
  return function() {
    var context = this;

    clearTimeout(timeID);
    timeID = setTimeout(function() {
      fn.apply(context);
    }, timeout);
  }
}

// 版本三
// 如果fn函数要接受参数，版本二是不支持的
function debounce(fn, timeout) {
  var timeID;
  return function() {
    var context = this;
    var args = arguments;

    clearTimeout(timeID);
    timeID = setTimeout(function() {
      // function.prototype.apply(thisArgs, [argsArray])中的 argsArray是一个数组或者类数组对象
      fn.apply(context, args);
    }, timeout);
  }
}

// 版本四
// 我们希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function debounce(fn, timeout, leading) {
  var timeID;
  return function() {
    var context = this;
    var args = arguments;

    clearTimeout(timeID);
    if(leading) {
      // 如果不存在timeI，说明第一次调用
      var callNow = !timeID;
      timeID = setTimeout(function() {
        // timeout之后将timeID设置为null
        timeID = null;
      }, timeout);
      callNow && fn.apply(context, args);
    } else {
      timeID = setTimeout(function() {
        fn.apply(context, args);
      }, timeout);
    }
  }
}

// 版本五
// 如果我们的fn函数有返回值。我们只在leading为true才能返回result.因为setTimeout是异步执行，使用promise可以做到返回result的结果，这里我们就不展开了。
function debounce(fn, timeout, leading) {
  var timeID, result;
  return function() {
    var context = this;
    var args = arguments;

    clearTimeout(timeID);
    if(leading) {
      var callNow = !timeID;
      timeID = setTimeout(function() {
        timeID = null;
      }, timeout);
      if(callNow) result = fn.apply(context, args);
    } else {
      timeID = setTimeout(function() {
        fn.apply(context, args);
      }, timeout);
    }
  }
}

//版本六
// 如果我们想要在timeout时间段内取消掉debounce。比如leading为true, timeout为10秒，只有等10秒才能重新触发事件。使用cancel操作，我们可以立即使用debounce.

function debounce(fn, timeout, leading) {
  var timeID, result;

  var debounced = function() {
    var context = this;
    var args = arguments;

    clearTimeout(timeID);
    if(leading) {
      var callNow = !timeID;
      timeID = setTimeout(function() {
        timeID = null;
      }, timeout);
      if(callNow) result = fn.apply(context, args);
    } else {
      timeID = setTimeout(function() {
        fn.apply(context, args);
      })
    }
  };

  debounced.cancel = function() {
    clearTimeout(timeID);
    timeID = null;
  };

  return debounced;
}



