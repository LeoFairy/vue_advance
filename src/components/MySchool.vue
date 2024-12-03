<template>
  <div class='school' >
    <h2> 学校名称：{{name}}</h2>
    <h2> 学校地址： {{address}}</h2>
    </div>
</template>

<script>
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
      this.$bus.$on('hello',(data)=>{
      console.log('School组件,收到了数据',data);
    })
    },
    beforeDestroy() {
      this.$bus.$off('hello')
    },
  }
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>