<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice139.png" style="width: 100px;height: 100px;"/>
    <span class="title">冰霜法杖</span>
  </div>
    
  <p>这根法杖似乎由某种魔法冰块制成。它的圆顶闪着亮光。握起来很冰，但不知为何你的手仍保持着温暖。该法杖能向你的敌人射击冰霜能量，造成伤害并冷冻目标，降低其行动速度。</p>
  <p>这根法杖的伤害为<text class="gg">2+法杖等级~8+5*法杖等级。</text></p>
  <p>使用它能给目标叠加<text class="gg">2+法杖等级</text>回合的冻伤，当目标在水上时上升到<text class="gg">4+法杖等级</text>回合。</p>
  <p>目标如果冻伤，每1回合冻伤降低伤害1/15,善乘计算，最多计算10回合的衰减(~50%)。对已冻结目标不会造成伤害，同时也不会打破冻结。</p>
  <p>战法效果是对冻伤的目标，有<text class="gg">(冻伤剩余回合-1)/9</text>概率冻结，不能延长冻结时间。</p>
  </template>
  
  <script>
  export default {
    name:'WandForst',
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