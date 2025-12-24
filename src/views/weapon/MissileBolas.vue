<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice106.png" style="width: 100px;height: 100px;" />
    <span class="title">流星锤</span>
  </div>
   <p> 这种奇怪的远程武器造成的伤害并不高，但是能用来绊倒目标使其减速，效果很好。</p>
<p v-highlight-numbers>这是一件3阶武器，力量需求为13，基础伤害为6~9，每件的耐久度为5。</p>
<p>使目标获得 <text class="gg">10回合残废</text>。伤害成长为 <text class="gg">+2/+3</text></p>

  </template>
  
  <script>
  export default {
    name: 'MissileBolas',
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