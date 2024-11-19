export default {
  install(Vue) {
    console.log("123", Vue);

    //全局过滤器
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 4);
    });

    //全局的自定义指令
    Vue.directive("fbind", {
      //调用时候: 指令与元素成功绑定时
      bind(element, binding) {
        element.value = binding.value;
      },
      //调用时候： 指令所在元素被插入页面时
      inserter(element, binding) {
        element.focus();
      },
      //调用时候: 指令所在的模版被重新解析时
      update(element, binding) {
        element.value = binding.value;
        element.focus();
      },
    });

    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200,
        };
      },
    });

    //给Vue原型上添加一个方法 （vm和vc都能用）
    Vue.prototype.hello = () => {
      alert("你好啊");
    };
  },
};
