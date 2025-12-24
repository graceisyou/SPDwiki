<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice89.png" style="width: 100px;height: 100px;" />
    <span class="title">十字弩</span>
  </div>
    <p>这是一件看起来相当精密复杂的装置，能够将飞镖一样的小型箭矢以极高的速度射出。这把十字驾驾掂在手里沉甸甸的，比想象中结实很多，虽然完全违背了设计初衷，不过也能够在肉搏战中起到作用。</p>
<p v-highlight-numbers>这是一件4阶武器，力量需求为16，基础伤害为3~20。</p>
<p v-highlight-numbers>它的伤害成长为1~4，精准修正为1，攻击延迟为1，攻击距离为1。</p>
<p>装备它之后飞镖的伤害上升为 <text class="gg">4+装备等级~12+3*装备等级</text> 。</p>
  </template>
  
  <script>
  export default {
    name:'CrossbowView',
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