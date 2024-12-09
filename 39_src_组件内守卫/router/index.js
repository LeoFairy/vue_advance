//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

//创建一个路由器
const router = new VueRouter({
  routes: [
    {
      name: "about123",
      path: "/about",
      component: About,
      meta: { isAuth: true, title: "关于" },
    },
    {
      name: "home123",
      path: "/home",
      component: Home,
      meta: { title: "主页" },
      children: [
        {
          name: "news123",
          path: "news" /* 子路由不用在写/了 */,
          component: News,
          meta: { isAuth: true, title: "新闻" },
          //独享路由守卫
          /* beforeEnter: (to, from, next) => {
            console.log("独享路由守卫");
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
          }, */
        },
        {
          name: "message123",
          path: "message",
          component: Message,
          meta: { isAuth: true, title: "消息" },
          children: [
            {
              name: "detail123",
              path: "detail/:id/:title",
              component: Detail,
              meta: { isAuth: true, title: "详情" },
              //props的第一种写法 ：值为对象 该对象中的键值对会以props的形式传给Detail组件
              // props: { a: 1, b: "hello" },

              //props的第二种写法 ：值为布尔值
              // 为真，把该路由接收到的所有params参数，以props的形式传给Detail组件
              // props: true,

              //props的第三种写法 ：值为函数
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title,
                };
              },
              /* 写法三的解构赋值： */
              /*  props({ params }) {
                return {
                  id: params.id,
                  title: params.title,
                };
              }, */
              /* 写法三的解构赋值进阶： */
              /*    props({ params: { id, title } }) {
                return {
                  id,
                  title,
                };
              }, */
            },
          ],
        },
      ],
    },
  ],
});
//独享路由

/* //全局前置路由守卫 -  初始化时候调用、每次路由切换时调用
router.beforeEach((to, from, next) => {
  // console.log("~");
  console.log("前置路由守卫");
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
}); */

//全局前置路由守卫
router.afterEach((to, from) => {
  console.log("后置路由守卫");
  document.title = to.meta.title || "初始页";
});
export default router;
