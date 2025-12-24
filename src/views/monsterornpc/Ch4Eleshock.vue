<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/elemental/part-Slice43.png" style="width: 100px;height: 100px;"/>
    <span class="title">电击元素</span>
  </div>
    
<p>元素生物是一种由于施放强大魔法时的失误产生的混沌生物。元素生物缺乏最基础的智力，它们通常与一种特定的魔法密切相关。</p>
<p>电击元素是一种较为少见的利用电击与闪光攻击敌人的元素生物。近战近战时它会向周围的敌人释放跳跃的电弧，首要目标在水中会受到额外伤害。对付远处的敌人它们会偶尔释放致盲的强烈闪光。</p>
<p>这只怪物的生命值上限为<text class="gg">60</text>，攻击为<text class="gg">20~25</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">25。</text></p>
<p>近战攻击对周围目标造成40%攻击的闪电连锁伤害，远程攻击会使得目标失明5回合。</p>
<p>具有<text class="gg">电</text>属性。</p>
<p>掉落<text class="gg">10</text>经验，获得经验的最大等级为<text class="gg">20</text>级。</p>
<p>1/4掉落充能卷轴。</p>
<p>电击元素生成概率比冰、火元素低一半。</p>
</template>

<script>
export default {
    name: 'Ch4Eleshock',
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