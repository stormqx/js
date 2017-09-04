/**
 * Created on 03/09/2017.
 */


// 队列
var maxDepth = function(root) {
  var queue = [];

  if(root == null) return 0;
  queue.push(root);

  var level = 0;
  while(queue.length > 0) {
    var n = queue.length;
    level++;
    for(var i=0; i<n; i++) {
      var node = queue.shift();
      if(node.left !== null) queue.push(node.left);
      if(node.right !== null) queue.push(node.right);
    }
  }
  return level;
};

// 递归
var maxDepth = function(root) {
  if(!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};