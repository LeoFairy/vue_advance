<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li> <!-- 二级路由要带上父亲的路径 -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 写的是组件名 ，  include写了谁， 切走的时候 该组件不会销毁 -->
      <keep-alive include="News">
        <router-view ></router-view>
      </keep-alive>
        
    </div>
  </div>
    
</template>

<script>
  export default {
    name:'Home'
  }
</script>
