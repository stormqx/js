/**
 * Created on 04/09/2017.
 */


var averageOfLevels = function(root) {
  if(root == null) return null;
  var queue = [];
  queue.push(root);
  var n;
  var rel = [];
  while(queue.length > 0) {
    var n = queue.length;
    var sum = 0;
    for(var i=0; i<n; i++) {
      var node = queue.shift();
      sum += node.val;
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
    }
    rel.push(sum / n);
  }
  return rel;
};