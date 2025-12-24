<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice101.png" style="width: 100px;height: 100px;" />
    <span class="title">石子</span>
  </div>
<p>    这些石头被人用砂纸打磨成趁手的形状，比普通石子更适合大力投向目标。尽管工艺精湛，作为武器还是不太可靠。</p>
<p v-highlight-numbers>这是一件1阶武器，力量需求为9，基础伤害为2~5，每件的耐久度为5。</p>
<p>伤害成长为 <text class="gg">+1/+2</text>。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileStone',
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