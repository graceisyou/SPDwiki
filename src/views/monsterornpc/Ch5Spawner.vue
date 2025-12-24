<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/spawner/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">恶魔血巢</span>
  </div>
    
<p>这一团蠕动着的矮人血肉在利用惨死于这区域的矮人源源不断地制造恶魔撕裂者。看来恶魔们为了对付入侵者可以不择手段。</p>
<p>恶魔血巢虽然看上去非常恐怖，但它本身不具备移动或攻击能力。不过它庞大的体积使得它难以被迅速杀死，而且它在受到威胁时会加速产出恶魔撕裂者。</p>
<p><text class="gg">恶魔血巢似乎都与某个提供恶魔能量的源头相连。杀死它们或许能够弱化那个源头。</text></p>
<p>这只怪物的生命值上限为<text class="gg">120</text>，防御为<text class="gg">0~12</text>，闪避为<text class="gg">0。</text></p>
<p>每隔60/53/47/40回合召唤一个恶魔撕裂者(随层数加深而加快)。</p>
<p>大幅抑制超过20的伤害(19之后每想要造成一点伤害，需要1,2,3，4,.点原始伤害)每受到1伤害减少召唤cd1回合。</p>
<p>具有<text class="gg">恶魔、无法移动、小型boss</text>属性，免疫<text class="gg">麻痹、狂乱、恐惧、眩晕、睡眠、魂飞魄散。</text></p>
<p>掉落<text class="gg">15</text>经验，获得经验的最大等级为<text class="gg">29</text>级。</p>
<p>必定掉落一瓶<text class="gg">治疗药水。</text></p>
</template>

<script>
export default {
    name: 'Ch5Spawner',
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