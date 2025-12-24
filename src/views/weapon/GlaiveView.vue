<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice93.png" style="width: 100px;height: 100px;" />
    <span class="title">关刀</span>
  </div>
<p>    一支在末端装有剑刃的重型长柄武器。</p>
<p v-highlight-numbers>这是一件5阶武器，力量需求为18，基础伤害为5~40。</p>
<p v-highlight-numbers>它的伤害成长为1~8，精准修正为1，攻击延迟为1.5，攻击距离为2。</p>
  </template>
  
  <script>
  export default {
    name:'GlaiveView',
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