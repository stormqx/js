/**
 * Created on 31/08/2017.
 */

// 使用两个栈实现一个队列

function queue() {
  this.stack1 = [];
  this.stack2 = [];
}

queue.prototype.enqueue = function(item) {
  this.stack1.push(item);
};

queue.prototype.dequeue = function() {
  if(this.stack2.length === 0) {
    while(this.stack1.length !== 0) {
      var value = this.stack1.pop();
      this.stack2.push(value);
    }
  }

  return this.stack2.pop();
};