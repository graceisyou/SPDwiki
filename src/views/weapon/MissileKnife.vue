<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice100.png" style="width: 100px;height: 100px;" />
    <span class="title">飞刀</span>
  </div>
<p>    这些轻便的小刀不同于普通的匕首，平衡的配重使其能在飞行后准确地刺穿目标。这种武器对未察觉你的敌人更加有效。</p>
<p v-highlight-numbers>这是一件1阶武器，力量需求为9，基础伤害为2~6，每件的耐久度为5。</p>
<p>伤害成长为 <text class="gg">+1/+2</text>。偷袭伤害为 <text class="gg">伤害范围的75%~最大伤害</text>。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileKnife',
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