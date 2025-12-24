<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice105.png" style="width: 100px;height: 100px;" />
    <span class="title">投矛</span>
  </div>
   <p> 这些轻便短矛的木杆非常纤细，很明显是一种投掷型武器，不适合用来近战。</p>
<p v-highlight-numbers>这是一件3阶武器，力量需求为13，基础伤害为6~15，每件的耐久度为10。</p>
<p>伤害成长为 <text class="gg">+2/+3</text>。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileSpear',
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