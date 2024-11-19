<template>
  <div class="demo" >
    <h2 class="red"> 学生姓名：{{name}}</h2>
    <h2 class="font"> 学生性别： {{sex}}</h2>
    </div>
</template>

<script>
  export default {
    name:'MyStudent',
    data () {
      return {
      name:'张三',
      sex:'男'
      }
    },
}
</script>

<style lang="less">
  .demo{
    background-color: pink;
    .font{
      font-size: 40px;
    }
  }
</style>