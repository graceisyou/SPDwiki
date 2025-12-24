<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/goo/part-Slice4.png" style="width: 100px;height: 100px;"/>
    <span class="title">粘咕</span>
  </div>

    
<p>我们对粘咕所知甚少。它甚至很有可能不是个生物，而是下水道表面聚集的邪恶物质得到基本智能而产生的实体。不管怎样，很明显是黑暗魔法造就了这个生物。</p>
<p>其凝胶性质让它吸收了很多黑暗能量，你光是靠近就感受到了一股寒意。如果粘咕使用这种能量对你进行攻击那你肯定支撑不了多斤。</p>
<p>这只怪物的生命值上限为<text class="gg">100</text>，攻击为<text class="gg">1~8</text>防御为<text class="gg">0~2</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">8</text>，命中为<text class="gg">10。</text></p>
<p>当它的生命值不高于生命值上限的<text class="gg">1/2</text>时，它会进入<text class="gg">暴怒</text>状态，暴怒状态下，它的攻击上升为<text class="gg">1~12</text>，闪避上升为<text class="gg">12</text>，命中上升为<text class="gg">15</text>。它的蓄力攻击为当前攻击伤害的<text class="gg">3</text>倍。</p>
<p>它攻击时1/3概率对敌人造成腐蚀淤泥效果。</p>
<p>当它在水中时，每回合回复<text class="gg">1</text>点生命值。</p>
<p>掉落<text class="gg">10</text>经验。</p>
<p>具有<text class="gg">boss，恶魔，酸</text>属性。</p>
<p>掉落<text class="gg">2~4个粘咕球</text>，概率分别为0.6,0.3,0.1。</p>
</template>

<script>
export default {
    name: 'Ch1Goo',
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