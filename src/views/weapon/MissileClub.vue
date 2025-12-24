<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice104.png" style="width: 100px;height: 100px;" />
    <span class="title">飞槌</span>
  </div>
    <p>简单粗暴的投掷武器，说白了就是一块绑着根木棍的大石头。伤害稍低，但结实的石槌头让它们非常耐用，而且不会留在敌人身上</p>
<p v-highlight-numbers>这是一件2阶武器，力量需求为11，基础伤害为4~8，每件的耐久度为15。</p>
<p>伤害成长 <text class="gg">+2/+2</text>。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileClub',
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