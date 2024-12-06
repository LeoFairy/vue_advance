<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h3>当前求和放大十倍为:{{bigSum}}</h3>
    <h3>我在{{school }},学习{{subject }}</h3>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    name:'Count',
    data () {
      return {
        n:1, //用户选择的数字
      }
    },
    computed:{
      //自己写计算属性
     /*  sum(){
        return this.$store.state.sum
      },
      school(){
         return this.$store.state.school
      },
      subject(){
         return this.$store.state.subject
      }, */

      //对象写法 ：通过mapState，从state中读取  (...就是把内容展开放在 键、值)
      // ...mapState({'sum':'sum',school:'school',subject:'subject'}),

      //数组写法 【名字必须一致】：通过mapState，从state中读取 
      ...mapState(['sum','school','subject']),

     /*  bigSum(){
        return this.$store.getters.bigSum
      }, */
      //对象写法 ：通过mapGetters，从getters中读取
      // ...mapGetters({bigSum:'bigSum'}),
      //数组写法 ：通过mapGetters，从getters中读取
      ...mapGetters(['bigSum'])
    },
    methods:{
      increment(){
        this.$store.commit('ADD',this.n)
      },
      decrement(){
        this.$store.commit('SUBTRACTION',this.n)
      },
      incrementOdd(){
      /*   if(this.$store.state.sum %2){
          this.$store.dispatch('add',this.n)
        } */
         this.$store.dispatch('addOdd',this.n)
      },
      incrementWait(){
      /*   setTimeout(()=>{
          this.$store.dispatch('add',this.n)
        },500) */
        this.$store.dispatch('addWait',this.n)
      }
    },
    mounted(){
      const x= mapState({'sum':'sum',school:'school',subject:'subject'})
      console.log(x);
    }
  }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>