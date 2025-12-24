<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/wraith/part-Slice9.png" style="width: 100px;height: 100px;"/>
    <span class="title">咒缚灵</span>
  </div>
    
<p>咒缚灵是本性善良的灵体，但却被诅咒所折磨。只要它们还被诅咒，它们就会像怨灵一样攻击你，而且更加强大!</p>
<p>或许可以在与它们相邻时使用正确的物品来驱散诅咒。它们定会对此非常感激..</p>
<p>这只怪物的生命值上限为<text class="gg">1</text>，攻击为<text class="gg">1+1.5*层数/2~2+1.5*层数</text>，攻击延迟为<text class="gg">1</text>移速为<text class="gg">1</text>,闪避为<text class="gg">命中*5</text>，命中为<text class="gg">10+1.5*层数。</text></p>
<p>具有<text class="gg">亡灵</text>属性。</p>
<p>经验值为0。</p>
<p>站在相邻格子使用驱邪卷轴时卷轴效果会替换为净化咒缚灵并且祛除自身的降级debuff，掉落一件无诅咒的武器或者护甲。</p>
</template>

<script>
export default {
    name: 'TormentedSpirit',
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