<template>
    <div class="container">
      <Category title="游戏" >
        <template scope="gamesObj">
          <!-- {{gamesObj.games}} -->
          <ul >
            <li v-for="(game,index) in gamesObj.games" :key ='index'> {{ game }}</li>
          </ul>
        </template>
      </Category>

      <Category title="游戏" >
        <template scope="{games}">  <!-- 使用了解构赋值 -->
          <!-- {{gamesObj.games}} -->
          <ol >
            <li style="color:red" v-for="(game,index) in games" :key ='index'> {{ game }}</li>
          </ol>
        </template>
      </Category>

      <Category title="游戏" >
        <template slot-scope="{games}">
          <h4 v-for="(game,index) in games" :key ='index'> {{ game }}</h4>
        </template>
      </Category>
    </div>
</template>

<script>
  import Category from './components/Category.vue';

  export default {
    name:'App',
    components:{Category},
    
  }  
</script>

<style>
  .container,.foot{
    display: flex;
    /*主轴对齐方式  */
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }

</style>
