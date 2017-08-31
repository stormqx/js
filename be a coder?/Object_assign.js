// shallow copy
// 使用IIFE来避免污染全局变量，使用Object.prototype.hasOwnProperty来调用避免该方法被覆盖
if(typeof Object.assign !== 'function') {
    (function () {
        Object.assign = function(target) {
            if(target === undefined || target === null) {
                throw error();
            }

            var output = Object(target);
            for(var i=1; i<arguments.length; i++) {
               var source = arguments[i];
               for(var val in source) {
                   if(Object.prototype.hasOwnProperty.call(source, val)) {
                       output[val] = source[val];
                   }
               }
            }
            return output;
        }
    })();
}
