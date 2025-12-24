<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/scorpio/part-Slice12.png" style="width: 100px;height: 100px;"/>
    <span class="title">酸液蝎子</span>
  </div>
    
<p>这些巨大的节肢类恶魔生物会尽可能避免切近距离接触，并且会在远处射出能够致残的尖刺。它的身上甚至还滴落着腐蚀污泥。</p>
<p>这只怪物的生命值上限为<text class="gg">110</text>，攻击为<text class="gg">30~40</text>，防御为<text class="gg">0~16</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>,闪避为<text class="gg">24</text>，命中为<text class="gg">36</text>，视野距离为<text class="gg">6。</text></p>
<p>攻击使目标50%获得<text class="gg">残废10回合</text>，命中目标或是受到目标的近身攻击时，目标会获得<text class="gg">20回合腐蚀污泥。</text></p>
<p>具有<text class="gg">恶魔</text>属性、<text class="gg">酸</text>属性。</p>
<p>掉落<text class="gg">14</text>经验，获得经验的最大等级为<text class="gg">27</text>级。</p>
<p>100%掉落一瓶经验药剂。</p>
</template>

<script>
export default {
    name: 'Ch5Acidic',
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