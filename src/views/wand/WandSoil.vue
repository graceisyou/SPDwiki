<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice144.png" style="width: 100px;height: 100px;"/>
    <span class="title">灵壤法杖</span>
  </div>

    
  <p>这根法杖由一种奇妙的石头组成，你能从几道微微发光的黄色条纹中感受到能量波动。握住法杖时石头好像会稍稍转动，仿佛在迎合你的手。这根法杖能向敌人发射魔法泥石，造成少量伤害。泥石随后会回归使用者身边，根据造成的伤害重组成灵壤护甲。灵壤护甲积累到一定程度后，下次使用法杖时会成型为一尊灵壤守护者。</p>
  <p>法杖的伤害为<text class="gg">4~6+等级*2</text>。命中时获得等于伤害的灵壤护甲。</p>
  <p>灵壤护甲会为你吸收50%的伤害。当护甲超过<text class="gg">8+等级*4</text>时，释放会召唤灵壤守卫者。</p>
  <p>守卫者具有<text class="gg">16+等级*8</text>点生命，与你相同的基础精准与一半的闪避，并具有<text class="gg">等级~等级*3+3</text>点防御力(信念护体挑战下，防御力降为<text class="gg">等级~2+等级</text>)，攻击造成<text class="gg">2~4+层数/2</text>点伤害。泥人会优先吸引敌人仇恨。</p>
  </template>
  
  <script>
  export default {
    name:'WandSoil',
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