<template>
  <div >
    <h2 @click="showName"> 学校名称：{{name}}</h2>
    <h2> 学校地址： {{address}}</h2>
    </div>
</template>

<script>
  //引入mixin
  // import{hun,hun2} from '../mixin'

  export default {
    name:'MySchool',
    data () {
      return {
      name:'vue',
      address:'北京',
      x:666
      }
    },
    // mixins: [hun,hun2],
    mounted() {
      console.log("你好啊!!!!!!!");
    },
  }
</script>

