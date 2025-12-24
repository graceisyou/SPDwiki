<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/dm200/part-Slice13.png" style="width: 100px;height: 100px;"/>
    <span class="title">DM-201</span>
  </div>
    
<p>矮人曾做过一些围绕 DM-200 的机动性缺陷展开的实验，并据此设计制造了一批完全固定的DM 系列机器。DM-201是经过改装的DM-200，其作为哨戒炮塔完全没有移动能力。作为交换，DM-201们的坚固程度与攻击能力都得到了显著的提升。</p>
<p>由于 DM-201 们并没有引擎来排放废气，矮人给它们装备了腐蚀气体榴弹!不过DM-201对榴弹的使用很谨慎，只有在受到来自远处的攻击时才会向敌人投掷榴弹。</p>
<p>这只怪物的生命值上限为<text class="gg">120</text>，攻击为<text class="gg">15~25</text>，防御为<text class="gg">0~8</text>，攻击延迟为<text class="gg">1</text>，闪避为<text class="gg">12</text>，命中为<text class="gg">20。</text></p>
<p>遇到敌人会远程发射初始伤害为8的酸雾:</p>
<p>具有<text class="gg">非生物、巨大体型、无法移动</text>属性。</p>
<p>掉落<text class="gg">9</text>经验，获得经验的最大等级为<text class="gg">17</text>级。</p>
<p>额外掉落一个邪能碎片。</p>
</template>

<script>
export default {
    name: 'Ch3Dm201',
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