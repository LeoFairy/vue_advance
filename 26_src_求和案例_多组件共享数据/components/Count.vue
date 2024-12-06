<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h3>当前求和放大十倍为:{{bigSum}}</h3>
    <h3>我在{{school }},学习{{subject }}</h3>
    <h3 style="color:red"> Person组件的总人数是：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  
  
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name:'Count',
    data () {
      return {
        n:1, //用户选择的数字
      }
    },
    computed:{
      //数组写法 【名字必须一致】：通过mapState，从state中读取 
      ...mapState(['sum','school','subject','personList']),
      //数组写法 ：通过mapGetters，从getters中读取
      ...mapGetters(['bigSum'])
    },
    methods:{
      //对象写法 借助mapMutations生成对应的方法，方法会调用commit去联系Mutations
      ...mapMutations({increment:'ADD',decrement:'SUBTRACTION'}),
      //对象写法
      ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),
    },
    mounted(){
    }
  }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>