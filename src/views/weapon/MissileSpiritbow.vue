<template>
  <div class="titlebox">
    <el-image src="/images/weapons/part-Slice98.png" style="width: 100px;height: 100px;" />
    <span class="title">灵能短弓</span>
  </div>
<p>    一把由远古灵木制成的弓，弓弦和刻纹散发着幽蓝色的光。当拉开弓弦时，弓会向敌人发射一只魔法箭矢。</p>
<p v-highlight-numbers>这是一件1阶武器，力量需求为10，基础伤害为1~6。</p>
<p>人物每5级弓升1级(但伤害连续变化)，对于每一级而言弓的伤害获得+1/+2。</p>
<p>追击技能:</p>
<p>弓不改造:0耗时，的67%弓伤害的一次追击</p>
<p>改造攻速:1回合，耗时50%弓伤害的3次追击。</p>
<p>改造伤害:2回合，基础倍率1.2倍的一次追击，每距目标1格距离伤害*112.5%，倍率至多3倍。</p>

  </template>
  
  <script>
  export default {
    name: 'MissileSpiritbow',
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