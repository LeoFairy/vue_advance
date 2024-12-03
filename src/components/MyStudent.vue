<template>
  <div class="student" >
    <h2 > 学生姓名：{{name}}</h2>
    <h2 > 学生性别： {{sex}}</h2>
    <button @click="sendStudentName"> 把学生名给app</button>
    <button @click="unbind"> 解绑sendData事件</button>
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
    methods: {
      sendStudentName(){
        //触发Student组件实例身上的sendData自定义事件
        this.$emit('sendData',this.name)
        this.$emit('demo')
      },
      unbind(){
        // this.$off('sendData')  //解绑一个自定义事件
        // this.$off(['sendData','demo'])  //解绑多个自定义事件
        this.$off() //解绑全部自定义事件

      }
    }
}
</script>

<style >
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>