<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/dm100/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">DM-100</span>
  </div>
    
<p>DM-100是一种矮人“防卫机械”的早期机型!用来保护下层矿洞中的矮人矿工。然而由于电击威力不足，它们之后被送给上层的人类监狱。典狱长起初认为DM-100太过残忍而没有启用，但随着时间推移，四犯变得越来越难以控制，这使得DM-100成为了监狱的必备品。</p>
<p>这只怪物的生命值上限为<text class="gg">20</text>,攻击为<text class="gg">2~8</text>，闪电伤害<text class="gg">3~10</text>，防御为<text class="gg">0~4</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>,闪避为<text class="gg">8</text>，命中为<text class="gg">11。</text></p>
<p>掉落<text class="gg">6</text>经验，获得经验的最大等级为<text class="gg">13</text>级。</p>
<p>具有<text class="gg">电、非生命</text>属性。</p>
<p>1/4掉落随机的卷轴(非升级)。</p>
</template>

<script>
export default {
    name: 'Ch2Dm100',
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