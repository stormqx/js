/**
 * Created on 04/09/2017.
 */
var levelOrderBottom = function(root) {
  if(!root) return [];
  var queue = [];
  queue.push(root);
  var rel = [];
  while(queue.length > 0) {
    var arr = [];
    var n = queue.length;
    for(var i=0; i<n; i++) {
      var node = queue.shift();
      arr.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    rel.unshift(arr);
  }
  return rel;
};