<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice76.png" style="width: 100px;height: 100px;" />
    <span class="title">长匕首</span>
  </div>
<p>    一个长一些的刺击型匕首，可以往敌人身体里捅得更深一点。</p>
<p v-highlight-numbers>这是一件2阶武器，力量需求为12，基础伤害为2~12。</p>
<p >它的伤害成长为 <text class="gg">1~3</text>，精准修正为 <text class="gg">1</text>,攻击延迟为 <text class="gg">1</text>, 攻击距离为 <text class="gg">1</text> 。偷袭伤害为 <text class="gg">伤害范围的67%~最大伤害</text> 。</p>
  </template>
  
  <script>
  export default {
    name:'DirkView',
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