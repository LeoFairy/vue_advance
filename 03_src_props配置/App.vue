<template>
  <div>
    <MyStudent name="张三" sex="男" :age="18"></MyStudent>
     <MyStudent name="李四" sex="女" :age="20"></MyStudent>
  </div>
</template>

<script>
  //引入MySchool组件
  import MyStudent from './components/MyStudent';

  export default {
    name:'App',
    components:{
      MyStudent
    },
    data(){
      return{
        msg:'欢迎学习vue'
      } 
    },
  }
</script>

