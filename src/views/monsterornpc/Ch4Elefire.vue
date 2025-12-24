<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/elemental/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">火元素</span>
  </div>

    
<p>元素生物是一种由于施放强大魔法时的失误产生的混沌生物。元素生物缺乏最基础的智力，它们通常与一种特定的魔法密切相关。</p>
<p>火元素是一种常见的借助火焰之力攻击的元素生物。在近战时它能使得目标燃起大火，对付远处的敌人也能偶尔向目标发射火球。</p>
<p>这只怪物的生命值上限为<text class="gg">60</text>，攻击为<text class="gg">20~25</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>,移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">25。</text></p>
<p>近战攻击50%概率点燃非水上目标8回合，远程攻击会使得目标燃烧4回合。</p>
<p>具有<text class="gg">火</text>属性，在遇到霜冻、冻结时失去50%~60%生命值。</p>
<p>掉落<text class="gg">10</text>经验，获得经验的最大等级为<text class="gg">20</text>级。</p>
<p>1/8掉落液火药水。</p>
</template>

<script>
export default {
    name: 'Ch4Elefire',
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