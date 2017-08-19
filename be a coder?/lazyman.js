/**
 * Created on 19/08/2017.
 */

/**
 * implement a lazyMan👨
 *
 * 🚀
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
 */

/**
 * 考察点：
 *  链式调用
 *  js类使用和面向对象编程
 *
 */

/**
 * 使用node最常规的顺序逻辑编写思想。即使用数组保存要顺序执行的函数，然后依次调用next函数shift出来一个执行。
 *
 * 解决思路：
 *   为每一个函数dispatch一个action, 加入到taskList中。
 *   然后使用next()函数按序执行函数。
 *
 * 此题关键点：
 *   利用eventLoop，使用setTimeout将lazyMan函数中的next函数挂起。
 *   等执行完链式调用后在执行。
 *   注意setTimeout的callback函数中的this指向window对象。
 *
 */

function lazyMan(name) {
  return new LazyMan(name);
}

function LazyMan(name) {
  this.taskList = [];

  this.dispatch({
    type: 'init',
    payload: name,
  });

  // 使用setTimeout将方法的具体实现代码放在下一个eventLoop中调用
  var that = this;
  setTimeout(function() {that.next();}, 0);
}

LazyMan.prototype.eat = function (thing) {
  this.dispatch({
    type: 'eat',
    payload: thing,
  });

  return this;

};

LazyMan.prototype.play = function (thing) {
  this.dispatch({
    type: 'play',
    payload: thing,
  });

  return this;
};

LazyMan.prototype.sleep = function (timeout) {
  this.dispatch({
    type: 'sleep',
    payload: timeout,
  });

  return this;
};

LazyMan.prototype.sleepFirst = function (timeout) {
  this.dispatch({
    type: 'sleepFirst',
    payload: timeout,
  });

  return this;
};

LazyMan.prototype.dispatch = function (action) {
  if(action.type === 'sleepFirst') {
    this.taskList.splice(1, 0, action);
  } else {
    this.taskList.push(action);
  }
};

LazyMan.prototype.next = function () {
  var curTask = this.taskList.shift();

  if(curTask) {
    this.run(curTask);
  }
};

LazyMan.prototype.run = function (action) {
  switch (action.type) {
    case 'init':
      this._init(action.payload);
      break;
    case 'eat':
      this._eat(action.payload);
      break;
    case 'play':
      this._play(action.payload);
      break;
    case 'sleep':
      this._sleep(action.payload);
      break;
    case 'sleepFirst':
      this._sleepFirst(action.payload);
      break;
  };
};


LazyMan.prototype._init = function(name) {
  this.name = name || 'someone';
  this.next();
};

LazyMan.prototype._play = function(thing) {
  console.log(this.name + ' play ' + thing);
  this.next();
};

LazyMan.prototype._eat = function(thing) {
  console.log(this.name + ' eat ' + thing);
  this.next();
};

LazyMan.prototype._sleep = function(timeout) {
  console.log(this.name + ' will sleep ' + timeout + 's');
  var that = this;
  setTimeout(function () {
    that.next();
  }, timeout * 1000);
};

LazyMan.prototype._sleepFirst = function(timeout) {
  console.log(this.name + ' will sleep ' + timeout + 's firstly');
  var that = this;
  setTimeout(function () {
    that.next();
  }, timeout * 1000);
};


lazyMan('qx').eat('apple').sleep(5).play('football');
lazyMan('qx').eat('apple').sleepFirst(5).play('football');