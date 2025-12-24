<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/elemental/part-Slice57.png" style="width: 100px;height: 100px;"/>
    <span class="title">混沌元素</span>
  </div>
    
<p>元素生物是一种由于施放强大魔法时的失误产生的混沌生物。元素生物缺乏最基础的智力，它们通常与一种特定的魔法密切相关。</p>
<p>混沌元素是一种极其稀有的元素生物。它们不仅仅局限于一种特定的魔法，而是借助随机的魔法进行强力的攻击。</p>
<p>这只怪物的生命值上限为<text class="gg">60</text>，攻击为<text class="gg">20~25</text>，防御为<text class="gg">0~5</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">20</text>，命中为<text class="gg">25。</text></p>
<p>近战与远程攻击效果同诅咒法杖释放。</p>
<p>掉落<text class="gg">10</text>经验，获得经验的最大等级为<text class="gg">20</text>级。</p>
<p>100%掉落一张嬗变卷轴。</p>
</template>

<script>
export default {
    name: 'Ch4Elechaos',
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