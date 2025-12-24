<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/rot_heart/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">腐烂之心</span>
  </div>
    
<p>腐莓的果实很独特。一般植物的果实会逐渐腐烂并给种子提供养分，但这种果实会生长变硬，并把种子牢牢包裹在内。它为果实里生长的内部器官提供保护。这种巨大的球状物被视为成年的腐莓植物的心脏部分。</p>
<p>这只怪物的生命值上限为<text class="gg">80</text>，没有攻击性，防御为<text class="gg">0~5。</text></p>
<p>具有<text class="gg">小型boss,无法移动</text>属性，免疫<text class="gg">麻痹、狂怒、魔法睡眠、毒气、魂飞魄散、恐惧</text>和<text class="gg">眩晕。</text></p>
<p>掉落<text class="gg">4</text>经验。</p>
</template>

<script>
export default {
    name: 'Ch2Rotheart',
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