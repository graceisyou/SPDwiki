<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/pylon/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">能源塔</span>
  </div>
    
<p>一座能源塔，用以管控为区域内机器供能的电力。此刻电能涌动，就是它在为DM-300增压吧!</p>
<p>这时的能源塔可被摧毁，却会顺时针向四周释放电弧。厚重的金属结构为其提供了强劲的防御。</p>
<p>这只怪物的生命值上限为<text class="gg">50。</text></p>
<p>激活时在周围释放旋转的电弧，伤害10~20</p>
<p>大幅抑制超过15的伤害(14之后每想要造成一点伤害，需要1,2，3，4,..点原始伤害)</p>
<p>具有<text class="gg">电、非生物、小型boss、无法移动</text>属性</p>
<p>掉落<text class="gg">0</text>经验，获取经验最大等级不超过<text class="gg">-2。</text></p>
<p>免疫<text class="gg">麻痹、狂乱、睡眠、恐惧、眩晕、魂飞魄散。</text></p>
</template>

<script>
export default {
    name: 'Ch3Pylon',
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