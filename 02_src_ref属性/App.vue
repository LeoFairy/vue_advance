<template>
  <div>
    <h1 v-text="msg" ref="title"> </h1>
    <button ref='btn' @click="showDom"> 点我输出上方dom元素</button>
    <MySchool ref="sch"></MySchool>
  </div>
</template>

<script>
  //引入MySchool组件
  import MySchool from './components/MySchool';

  export default {
    name:'App',
    components:{
      MySchool
    },
    data(){
      return{
        msg:'欢迎学习vue'
      } 
    },

    methods:{
      showDom(){
        console.log(this.$refs.title); // 真实DOM元素
        console.log(this.$refs.btn);  //真实DOM元素
        console.log(this.$refs.sch);  //MySchool组件的实例对象vc
        
      }
    }
  }
</script>

