<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- 跳转路由并携带params参数， to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{ msg.title }}</router-link> -->
        
        <!-- 跳转路由并携带params参数， to的对象写法 -->
        <router-link :to="{
          name:'detail123',  /* params时，这里不可以用path 只能用name */
          params:{
            id:msg.id ,
            title:msg.title
          }
        }">
          {{ msg.title }}
        </router-link>

        <button @click="pushShow(msg)">以push方式查看 </button>  <!-- （直接在栈顶加入新的浏览器记录） -->
        <button @click="replaceShow(msg)">以replace方式查看 </button>  <!--（替换当前栈顶的浏览器记录）  -->

        
      </li>
    </ul>
    <hr>
    <router-view ></router-view>
  </div>
</template>

<script>
  export default {
    name:'Message',
    data () {
      return {
        messageList:[
          {id:'001',title:'消息001'},
          {id:'002',title:'消息002'},
          {id:'003',title:'消息003'},
        ]
      }
    },
    methods: {
      pushShow(msg){
        // console.log(this.$router);
        this.$router.push({
          name:'detail123',  /* params时，这里不可以用path 只能用name */
          params:{
            id:msg.id ,
            title:msg.title,
          }
        })
      },
      replaceShow(msg){
        // console.log(this.$router);
        this.$router.replace({
          name:'detail123',  /* params时，这里不可以用path 只能用name */
          params:{
            id:msg.id ,
            title:msg.title,
          }
        })
      },
      
    },  
  }
</script>
