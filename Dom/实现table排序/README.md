# 实现表格的sort方法。

[地址](https://codepen.io/anon/pen/BdboJQ)

注意点：

1. `Function.prototype.apply`的第二个参数可以是类数组对象。所以我们可以用`Array.prototype.push.apply`将nodeList的数据push到数组中，这样我们就可以方便的使用Array的方法了。
2. 访问一个node节点的内容是`textContent`。`textContent`总会返回字符串形式。
3. 调用`Array.prototype.sort`方法的时候，我们要注意区分**字符**和**数字**两种情况。对于**字符**，我们要使用`>`，然后在根据结果转化为正负值。对于**数字**，我们直接转化为数字相减便是。
4. 注意：如果rel是字符串形式的话， +rel返回的是NaN。 我们判断NaN应该使用`Object.is`。