<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/elemental/part-Slice29.png" style="width: 100px;height: 100px;"/>
    <span class="title">冰霜元素</span>
  </div>
    
<p>元素生物是一种由于施放强大魔法时的失误产生的混沌生物。元素生物缺乏最基础的智力，它们通常与一种特定的魔法密切相关。</p>
<p>冰霜元素是一种常见的借助冰霜之力弱化敌人的元素生物。它们近战会使敌人陷入冻伤，也能偶尔远程攻击，在水面上冰霜之力的效果会显著加强。</p>
<p>这只怪物的生命值上限为<text class="gg">60</text>，攻击为<text class="gg">20~25</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">25。</text></p>
<p>近战攻击33%概率冻结水上目标，远程攻击会使得目标冻伤回合+3(水上改为+5)，达到10回合时冰冻，若已经冰冻则改为冰冻两回合。</p>
<p>具有<text class="gg">冰</text>属性，在遇到燃烧时失去50%~60%生命值。</p>
<p>掉落<text class="gg">10</text>经验，获得经验的最大等级为<text class="gg">20</text>级。</p>
<p>1/8掉落霜冻药水。</p>
</template>

<script>
export default {
    name: 'Ch4Elefrost',
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