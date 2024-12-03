<template>
  <div class="app">
    <h1 > {{ msg }} 学生名字是:{{studentName}}</h1>
    <!-- 子给父传数据 通过props -->
    <MySchool :getSchoolName="getSchoolName" />
    <!-- 子给父传数据 绑定自定义事件  通过@或者v-on-->
    <MyStudent @sendData="getStudentName"  @demo="m1"  @click.native="show"/>

    <!-- 子给父传数据 绑定自定义事件  通过ref拿到vc 再在mounted时 给vc上加-->
    <!-- <MyStudent ref='student' /> -->
  </div>
</template>

<script>
  //引入MySchool组件
  import MyStudent from './components/MyStudent';
  import MySchool from './components/MySchool';

  export default {
    name:'App',
    data () {
      return {
        msg:'你好啊',
        studentName:''
      }
    },
    components:{
      MyStudent,
      MySchool
    },
    methods:{
      getSchoolName(name){
        console.log('收到学校名',name);
      },
      getStudentName(name){
        console.log('收到学生名',name);
        this.studentName=name
      },
      m1(){
        console.log('m1被触发了');
        
      },
      show(){
        alert(123)
      }
    },
    mounted() {
/*       setTimeout(() => {
          this.$refs.student.$on('sendData',this.getStudentName) //绑定自定义事件
      }, 3000); */
          // this.$refs.student.$once('sendData',this.getStudentName) //绑定自定义事件一次

    },
   
  }
</script>

<style scoped>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>

