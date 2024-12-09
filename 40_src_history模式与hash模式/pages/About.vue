<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    name:'About',
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log('app-beforeRouteEnter',to,from);
            // if (to.path === "/home/news" || to.path === "home/message") {
            //判断是否需要授权
            if (to.meta.isAuth) {
              if (localStorage.getItem("study") === "vue") {
                next();
              } else {
                alert("学习项目不对，无法查看");
              }
            } else {
              next();
            }
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log('app-beforeRouteLeave',to,from);
      next();
    }

  }
</script>
