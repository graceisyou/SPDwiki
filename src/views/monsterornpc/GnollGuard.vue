<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/gnoll_guard/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">豺狼守卫</span>
  </div>
    
<p>这个高大健壮的豺狼人操使着长矛和盾牌但没有戴头盔。这些守卫似乎在为晋升成暴徒而训练，并为保护矿洞不受野兽侵扰在此执勤。</p>
<p>这只怪物的生命值上限为<text class="gg">35</text>，相邻时攻击为<text class="gg">6~12</text>，不相邻时攻击为<text class="gg">16~22</text>，防御为<text class="gg">0~6</text>攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，命中为<text class="gg">20</text>，闪避为<text class="gg">15。</text></p>
<p>不可获得经验，刷新时10%概率携带但不会掉落的长矛。</p>
<p>攻击范围为<text class="gg">2</text>，要求双方之间弹道畅通。</p>
<p>拥有矿工伙伴时受到的伤害减少<text class="gg">75%</text>，以落石动画特效表示</p>
<p>游荡时会前往伙伴所在位置。</p>
</template>

<script>
export default {
    name: 'GnollGuard',
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