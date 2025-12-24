<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice107.png" style="width: 100px;height: 100px;" />
    <span class="title">苦无</span>
  </div>
    <p>技巧高深者能用这种小刀造成可观的伤害。这种武器在对付未察觉你的敌人时更为有效</p>
<p v-highlight-numbers>这是一件3阶武器，力量需求为13，基础伤害为6~12，每件的耐久度为5。</p>
<p>成长+2/+3，偷袭伤害为 <text class="gg">伤害范围的60%~最大伤害</text>。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileKunai',
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