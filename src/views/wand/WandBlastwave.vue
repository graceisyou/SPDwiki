<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice145.png" style="width: 100px;height: 100px;"/>
    <span class="title">冲击波法杖</span>
  </div>
    
  <p>这根法杖由一种大理石石材制成，嵌有金饰并在顶部镶着一个浑圆的黑宝石。它在你手中的感觉非常沉重。该法杖能射出一股能量，在目标位置引发强烈的爆炸。爆炸的力量强到足以击飞大多数敌人。</p>
  <p>这根法杖的伤害为<text class="gg">1+法杖等级~3+3*法杖等级</text>，整个范围内伤害相同。</p>
  <p>中心击退距离为<text class="gg">等级+3</text>格，周围击退距离为1+等级/2格。</p>
  <p>对于boss它只会造成原先距离一半的击退距离。</p>
  <p>战法效果是<text class="gg">概率击退敌人2格</text>(同弹性附魔)。</p>
  </template>
  
  <script>
  export default {
    name:'WandBlastwave',
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