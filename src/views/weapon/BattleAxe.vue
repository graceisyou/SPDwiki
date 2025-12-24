<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice85.png" style="width: 100px;height: 100px;" />
    <span class="title">战斧</span>
  </div>
    <p>这把有着硕大钢制头部的战斧能将庞大的力量倾注在每次挥舞之中。</p>
<p v-highlight-numbers>这是一件4阶武器，力量需求为16，基础伤害为4~20。</p>
<p v-highlight-numbers>它的伤害成长为1~5，精准修正为1.24，攻击延迟为1。攻击距离为1。</p>
  </template>
  
  <script>
  export default {
    name:'BattleAxe',
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