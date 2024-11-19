<template>
  <div>
    <h1 class="red"></h1>
    <MySchool/>
    <hr>
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
   
  }
</script>

<style scoped>
  .red{
    background-color: red;
  }
</style>

