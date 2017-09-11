/**
 * Created on 09/09/2017.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  if(!root) return;
  var queue = [];
  queue.push(root);
  var rel = null;
  while(queue.length > 0) {
    var len = queue.length;
    for(var i = 0; i < len; i++) {
      var cur = queue.shift();
      if(i == 0) rel = cur.val;
      if(cur.left) queue.push(cur.left);
      if(cur.right) queue.push(cur.right);
    }
  }
  return rel;
};