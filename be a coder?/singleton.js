/**
 * Created on 26/08/2017.
 */

var singleton = (function(){
  var instance;

  function getInstance() {
    if(!instance) {
      instance = new Object();
    }
    return instance;
  }

  function addA() {
    instance.a = 'asd';
  }

  function getA() {
    return instance.a;
  }

  // 公有方法
  return {
    getInstance: getInstance,
    addA: addA,
    getA: getA,
  };

})();