/**
 * Created on 04/09/2017.
 */
var findTarget = function(root, k) {
  var set = {};
  return find(root, k, set);
};


// hashSet
function find(root, k, set) {
  if(!root) return false;
  if(set[k-root.val]) return true;
  set[root.val] = true;
  return find(root.left, k, set) || find(root.right, k, set);
}

// BFS
// 注意： 先判断k-node.val是否存在，在添加node.val. 否则 tree:[1]  node:2会返回true
function find(root, k, set) {
  var queue = [];
  queue.push(root);
  while(queue.length > 0) {
    var node = queue.shift();
    if(set[k-node.val]) return true;
    set[node.val] = true;
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return false;
}