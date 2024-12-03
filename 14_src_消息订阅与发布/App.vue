<template>
  <div class="app">
    <h1 > {{ msg }} </h1>
    <MySchool/>
    <MyStudent/>
  </div>
</template>

<script>
  //引入MySchool组件
  import MyStudent from './components/MyStudent';
  import MySchool from './components/MySchool';

  export default {
    name:'App',
    components:{
      MyStudent,
      MySchool
    },
    data () {
      return {
        msg:'你好啊',
        studentName:''
      }
    },
  }
</script>

<style scoped>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>

