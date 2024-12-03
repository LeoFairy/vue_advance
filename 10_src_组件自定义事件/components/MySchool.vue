<template>
  <div class='school' >
    <h2> 学校名称：{{name}}</h2>
    <h2> 学校地址： {{address}}</h2>
    <button @click="sendSchoolName"> 把学校名给app</button>
    </div>
</template>

<script>
  export default {
    name:'MySchool',
    props:['getSchoolName'],
    data () {
      return {
      name:'vue',
      address:'北京',
      }
    },
    methods:{
      sendSchoolName(name){
        this.getSchoolName(this.name)
      }
    }
  }
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>