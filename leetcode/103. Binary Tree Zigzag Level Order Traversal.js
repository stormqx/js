/**
 * Created on 04/09/2017.
 */
var zigzagLevelOrder = function(root) {
  if(!root) return [];
  var queue = [];

  queue.push(root);
  // true表示从左到右, false表示从右到左
  var order = true;
  var rel = [];
  while(queue.length > 0) {
    var n = queue.length;
    var arr = [];
    for(var i=0; i<n; i++) {
      var node = queue.shift();
      if(node.left) {
        queue.push(node.left);
      }

      if(node.right) {
        queue.push(node.right);
      }
      if(order) {
        arr.push(node.val);
      } else {
        arr.unshift(node.val);
      }
    }
    order = !order;
    rel.push(arr);
  }
  return rel;
};