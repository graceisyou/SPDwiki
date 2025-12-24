<template>
  <div class="titlebox">
    <el-image src="/images/wand/part-Slice146.png" style="width: 100px;height: 100px;"/>
    <span class="title">腐化法杖</span>
  </div>
    
  <p>这根法杖能发射混乱的黑暗能量，法杖尖端的那个小头骨装饰很是应景。该法杖会释放腐坏的能量，能削弱敌人并最终将他们扭曲为你的奴仆。敌人能抵抗腐化，但虚弱的敌人明显地更容易被腐化。</p>
  <p>敌人的腐化抗性=(1+经验)*(1+4*生命值比例^2)。大部分无经验的生物腐化抗性取决于楼层。</p>
  <p>腐化法杖本身的腐化能力为3+等级/3.</p>
  <p>当前不能腐化时，腐化法杖会随机对目标施加失明，恐惧，虚弱，残废，狂乱，迟缓，麻痹，虚弱，幻惑，时长为<text class="gg">6+等级*3</text>回合。</p>
  <p>每个debuff都会降低敌人抗性25%或50%<text class="gg">(未必是腐化法杖施加的，取决于debuff类型)</text>，低至不超过法杖腐化能力即可腐化。对免疫腐化的目标，腐化体现为定命。</p>
  </template>
  
  <script>
  export default {
    name:'WandCorruption',
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