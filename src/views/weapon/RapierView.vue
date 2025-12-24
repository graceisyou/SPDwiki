<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice69.png" style="width: 100px;height: 100px;" />
    <span class="title">刺剑</span>
  </div>
    <p>一柄修长而笔直的利器，牺牲了部分劈砍能力而获得一定的保护效果。</p>
<p v-highlight-numbers>这是一件1阶武器，力量需求为10，基础伤害为1~8。</p>
<p v-highlight-numbers>它的伤害成长为1~2，精准修正为1，攻击延迟为1，攻击距离为1，这件武器可以抵挡0~1点伤害。</p>
  </template>
  
  <script>
  export default {
    name: 'RapierView',
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