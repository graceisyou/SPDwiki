<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice142.png" style="width: 100px;height: 100px;"/>
    <span class="title">棱光法杖</span>
  </div>

    
  <p>这根法杖由一块实心半透明水晶构成，就像一块厚长光滑的玻璃。一粒粒彩色的光点在法杖顶端跳跃，随时准备进射而出。该法杖射出的光线能刺破地牢的黑暗，揭露隐藏的区域和陷阱。光线能致盲敌人并造成伤害。恶魔与亡灵生物会在法杖的强光下燃烧，受到额外伤害。</p>
  <p>这根法杖的伤害为<text class="gg">1+法杖等级~5+3*法杖等级。</text></p>
  <p>使用它有<text class="gg">1-3/(法杖等级+5)</text>几率造成<text class="gg">2+(法杖等级)</text>回合失明。</p>
  <p>它能够探查出射线路径周围一格的隐藏地形。</p>
  <p>使用它会给你一个<text class="gg">10+法杖等级*5</text>回合的光照。但在没入黑暗挑战下持续时间缩短为<text class="gg">2+法杖等级。</text></p>
  </template>
  
  <script>
  export default {
    name:'WandLight',
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