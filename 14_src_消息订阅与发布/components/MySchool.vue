<template>
  <div class='school' >
    <h2> 学校名称：{{name}}</h2>
    <h2> 学校地址： {{address}}</h2>
    </div>
</template>

<script>
  import pubsub from 'pubsub-js';

  export default {
    name:'MySchool',
    data () {
      return {
      name:'vue',
      address:'北京',
      }
    },
    mounted() {
      // console.log('School',this);
      // 绑定事件：
   /*   this.$bus.$on('hello',(data)=>{
      console.log('School组件,收到了数据',data);
    }) */
      this.pubId = pubsub.subscribe('hello',function(msgName,data){
        console.log('有人发布了hello,hello消息的回调执行了',msgName,data);
        
      })
    },
    beforeDestroy() {
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    },
  }
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>