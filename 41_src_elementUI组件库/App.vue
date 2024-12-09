<template>
  <div>
    <button>原生按钮</button>
    <input type="text">
    <ysf-row>
      <ysf-button>默认按钮</ysf-button>
      <ysf-button type="primary">主要按钮</ysf-button>
      <ysf-button type="success">成功按钮</ysf-button>
      <ysf-button type="info">信息按钮</ysf-button>
      <ysf-button type="warning">警告按钮</ysf-button>
      <ysf-button type="danger">危险按钮</ysf-button>
    </ysf-row>

    <ysf-datepicker
      type="date"
      placeholder="选择日期">
    </ysf-datepicker>

    <ysf-row>
      <ysf-button icon="el-icon-search" circle></ysf-button>
      <ysf-button type="primary" icon="el-icon-user" circle></ysf-button>
      <ysf-button type="success" icon="el-icon-check" circle></ysf-button>
      <ysf-button type="info" icon="el-icon-message" circle></ysf-button>
      <ysf-button type="warning" icon="el-icon-star-off" circle></ysf-button>
      <ysf-button type="danger" icon="el-icon-delete" circle></ysf-button>
    </ysf-row>
  </div>
</template>

<script>
  export default {
    name:'App',

  }  
</script>
