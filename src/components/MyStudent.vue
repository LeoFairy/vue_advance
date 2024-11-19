<template>
  <div >
    <h1>{{ msg }}</h1>
    <h2> 学生姓名：{{name}}</h2>
    <h2> 学生性别： {{sex}}</h2>
    <h2> 学生年龄： {{myAge+1}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name:'MySchool',
  data () {
    return {
      msg:'我是一个学生',
      myAge:this.age
    }
  },
  methods:{
    updateAge(){
      this.myAge++
    }
  },
  // props:['name','sex','age'] 简单接收

  // 接受同时，对类型进行限制
/*   props:{
    name:String,
    age:Number,
    sex:String
  } */

    // 接受同时，对类型进行限制+ 默认值和必要值的指定
  props:{
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      default:99
    },
    sex:{
      type:String,
      required:true
    }
  }
}
</script>

<style>
 .school{
  background-color: gray;
 }
</style>