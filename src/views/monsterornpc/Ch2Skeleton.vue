<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/skeleton/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">骷髅</span>
  </div>
    
<p>骷髅是从那些悲惨的冒险者及地牢原住民厅骨的聚合物产生的，来自下层地牢的邪恶力量将它们从死亡中唤起。在吸收了足够的伤害之后，它们就会在骨头的爆炸中消解。</p>
<p>这只怪物的生命值上限为<text class="gg">25</text>，攻击为<text class="gg">2~10</text>，防御为<text class="gg">0~5</text>，攻速为<text class="gg">1</text>移速为<text class="gg">1</text>，闪避为<text class="gg">9</text>命中为<text class="gg">12。</text></p>
<p>它死亡时会爆炸以伤害到周围一格内的所有生物，爆炸伤害为<text class="gg">6~12</text>。护甲能以<text class="gg">2</text>次的防御来抵抗骷髅爆炸。</p>
<p>具有<text class="gg">亡灵，非生物</text>属性。</p>
<p>掉落<text class="gg">5</text>经验，获得经验的最大等级为<text class="gg">10</text>级。</p>
<p>1/6概率掉落随机武器，每一次掉落都会降低掉落率1/2。</p>
</template>

<script>
export default {
    name: 'Ch2Skeleton',
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