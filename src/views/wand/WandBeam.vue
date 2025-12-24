<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice141.png" style="width: 100px;height: 100px;"/>
    <span class="title">解离法杖</span>
  </div>
    
  <p>这根法杖由一整块光滑的黑曜石制成，深紫色的光自其边缘流向法杖顶端。它闪烁着破坏性能量，准备着向前进射。这根法杖射出的光束能穿透任何障碍物，并将随着法杖等级的提升而射得更远。光束会造成伤害，并且会根据穿透的地形和敌人数量造成额外伤害。</p>
  <p>这根法杖的伤害为<text class="gg">2+法杖等级~8+4*法杖等级。</text></p>
  <p>伤害修正与穿过的地形数量与穿透的目标数量有关。每穿透一个生物或三个固体方块，伤害会 +1/+4。</p>
  <p>它的射线距离为<text class="gg">法杖等级*2+6。</text></p>
  <p>它能够破坏可破坏地形(例如书架、木栅栏草等)以及穿透地形造成伤害，但不会对未发现的中立角色造成伤害。</p>
  <p>战法效果是<text class="gg">延长魔杖1格攻距。</text></p>
  </template>
  
  <script>
  export default {
    name:'WandBeam',
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