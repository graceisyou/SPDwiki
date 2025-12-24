<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice82.png" style="width: 100px;height: 100px;" />
    <span class="title">双钗</span>
  </div>
   <p> 一对轻薄的铁刃，刚好一手一把。在格挡和快速斩击方面都十分出色。</p>
<p v-highlight-numbers>这是一件3阶武器，力量需求为14，基础伤害为3~10。</p>
<p v-highlight-numbers>它的伤害成长为1~2，精准修正为1，攻击延迟为0.5，攻击距离为1</p>
  </template>
  
  <script>
  export default {
    name: 'SaiView',
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