<template>
  <div class='demo' >
    <h2 class="red"> 学校名称：{{name}}</h2>
    <h2> 学校地址： {{address}}</h2>
    </div>
</template>

<script>
  export default {
    name:'MySchool',
    data () {
      return {
      name:'vueasdasdasda',
      address:'北京',
      }
    },
  }
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>