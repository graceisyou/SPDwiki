<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice108.png" style="width: 100px;height: 100px;" />
    <span class="title">标枪</span>
  </div>
<p>    这些大号投掷用长枪上的配重保证它们会以尖端为首飞向目标。</p>
<p v-highlight-numbers>这是一件4阶武器，力量需求为15，基础伤害为8~20，每件的耐久度为10。</p>
<p>伤害成长为 <text class="gg">+2/+4</text>。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileJavelin',
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