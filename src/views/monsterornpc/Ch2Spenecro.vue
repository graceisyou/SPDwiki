<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/necromancer/part-Slice14.png" style="width: 100px;height: 100px;"/>
    <span class="title">招魂法师</span>
  </div>
<p>死灵法师们通常对召唤骷髅欲罢不能，但其中某些个体却偏爱使唤更为缥缈无形的造物招魂法师们便选择了怨灵作为他们的爪牙</p>
<p>怨灵的个体战斗力或许不如骷髅，但这帮招魂法师无论召唤出多少手下都不会嫌多!</p>
<p>这个怪物的生命上限为<text class="gg">40</text>，攻击为<text class="gg">0</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">13</text>，命中为<text class="gg">0</text>。不断召唤怨灵且没有数量上限。</p>
<p>具有<text class="gg">亡灵</text>属性。</p>
<p>掉落<text class="gg">7</text>经验，获取经验最大等级不超过<text class="gg">14。</text></p>
<p>额外掉落一张驱邪卷轴。</p>
</template>

<script>
export default {
    name: 'Ch2Spenecro',
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