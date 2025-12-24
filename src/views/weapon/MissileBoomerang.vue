<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice110.png" style="width: 100px;height: 100px;" />
    <span class="title">重型回旋镖</span>
  </div>
<p>    这把大块头回旋镖使用起来困难，但能造成可观的伤害。被扔出的几回合后，它会飞飞回到扔出的地点。</p>
<p v-highlight-numbers>这是一件4阶武器，力量需求为15，基础伤害为8~16，每件的耐久度为10。</p>
<p>成长+2/+4。2回合后返回。返回时仍可造成伤害。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileBoomerang',
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