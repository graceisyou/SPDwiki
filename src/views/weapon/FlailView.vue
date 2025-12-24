<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice86.png" style="width: 100px;height: 100px;" />
    <span class="title">链枷</span>
  </div>
<p>    铁链上附着的一个带刺的钢球。笨重难用，能命中的话威力极强。</p>
<p v-highlight-numbers>这是一件4阶武器，力量需求为16，基础伤害为4~35。</p>
<p v-highlight-numbers>它的伤害成长为1~8，精准修正为0.8，攻击延迟为1，攻击距离为1。不能偷袭。</p>
  </template>
  
  <script>
  export default {
    name:'FlailView',
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