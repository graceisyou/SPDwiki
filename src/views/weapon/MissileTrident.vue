<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice111.png" style="width: 100px;height: 100px;" />
    <span class="title">三叉戟</span>
  </div>
   <p> 一把尖端有着三根致命尖叉的特大号投掷用长枪。威力极大，但也很重。</p>
<p v-highlight-numbers>这是一件5阶武器，力量需求为17，基础伤害为10~25，每件的耐久度为10。</p>
<p>伤害成长为 <text class="gg">+2/+5</text>。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileTrident',
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