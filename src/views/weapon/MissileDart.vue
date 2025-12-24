<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice114.png" style="width: 100px;height: 100px;" />
    <span class="title">飞镖</span>
  </div>
<p>    由短木杆和金属尖头简易制成，手腕轻抖就会精准地飞向目标。</p>
<p v-highlight-numbers>    这是一件1阶武器，力量需求为9，基础伤害为1~2.</p>

  </template>
  
  <script>
  export default {
    name: 'MissileDart',
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