<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/ghoul/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">矮人尸群</span>
  </div>
    
<p>在矮人王国逐渐衰亡，现在的矮人国王掌握了绝对的权力时，一些较为弱小的或是反抗国王的矮人受到了不公的待遇。然而随着矮人国王逐渐精通黑暗魔法，这些矮人逐渐应从于其意志，并最终沦为了其大军中的一枚棋子。</p>
<p>矮人尸群中的个体本身没有强大的战斗力:但它们总是结伴作战，试图利用数量优势击败强大的对手。<text class="gg">一名矮人尸群成员被击倒时，如果能保持位于另一个成员的视野内或者周围7x7范围内，它将陷入假死状态，并在被击倒次数x5(由于回合计算问题一般会-1)回合后以10%生命重生，否则将会死亡。</text></p>
<p>这只怪物的生命值上限为<text class="gg">45</text>，攻击为<text class="gg">16~22</text>，防御为<text class="gg">0~4</text>，攻击延迟为<text class="gg">1</text>,移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">24。</text></p>
<p>具有<text class="gg">亡炅</text>属性。</p>
<p>掉落<text class="gg">5</text>经验，获得经验的最大等级为<text class="gg">20</text>级。</p>
<p>20%掉落金币。</p>
</template>

<script>
export default {
    name: 'Ch4Ghoul',
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