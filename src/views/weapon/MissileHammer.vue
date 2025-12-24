<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice112.png" style="width: 100px;height: 100px;" />
    <span class="title">投掷锤</span>
  </div>
<p>    这些沉甸甸的锤子是用来扔向敌人的。伤害稍低，但平滑的纯金属的制作工艺让它们非常结实，而且不会留在敌人身上。</p>
<p v-highlight-numbers>这是一件5阶武器，力量需求为17，基础伤害为10~20，每件的耐久度为15。</p>
<p>伤害成长为 <text class="gg">+2/+5</text>。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileHammer',
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