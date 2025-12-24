<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice80.png" style="width: 100px;height: 100px;" />
    <span class="title">弯刀</span>
  </div>
  <p>一把厚重的弯刀。它的形状能让它进行更快但不甚强力的攻击。</p>
 <p v-highlight-numbers>   这是一件3阶武器，力量需求为14，基础伤害为3~16。</p>
  <p v-highlight-numbers>  它的伤害成长为1~4，精准修正为1，攻击延迟为0.8，攻击距离为1。</p>
  </template>
  
  <script>
  export default {
    name: 'ScimitarView',
    data() {
      return {
  
  
      }
    }
  }
  
  </script>
  
  <style scoped lang="less">
  .titlebox{
    display: flex;
    align-items: center;
    .title{
      font-size: 40px;
      color: rgb(255,255,68);
      text-shadow:
            -2px -2px 0 #000, /* 左上 */
            2px -2px 0 #000, /* 右上 */
          -2px 2px 0 #000, /* 左下 */
          2px 2px 0 #000; /* 右下 */
    }
  }
  :deep(.gg){
    color: rgb(255,255,68);
    text-shadow:
          -2px -2px 0 #000, /* 左上 */
          2px -2px 0 #000, /* 右上 */
        -2px 2px 0 #000, /* 左下 */
        2px 2px 0 #000; /* 右下 */
  }
  p{
    color: white;
    text-shadow:
          -1px -1px 0 #000, /* 左上 */
          1px -1px 0 #000, /* 右上 */
        -1px 1px 0 #000, /* 左下 */
        1px 1px 0 #000; /* 右下 */
  }
  </style>