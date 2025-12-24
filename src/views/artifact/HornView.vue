<template>
    <div class="titlebox">
    <el-image src="/images/artifact/part-Slice171.png" style="width: 100px;height: 100px;"/>
    <span class="title">丰饶之角</span>
  </div>
    <p>这个号角不能被用来吹奏，不过会随着你深入地牢获得经验而逐渐填充食物。</p>
    <p>角色获得经验充能，储存其他食物升级。</p>
    <p>最大充能为<text class="gg">5+神器等级/2。</text></p>
    <p>每1级经验可以给号角提供<text class="gg">1.25+神器等级*0.625</text>点充能。</p>
    <p>每个充能回复<text class="gg">90</text>饥饿(吃饱<text class="gg">450</text>)</p>
    <p>往其中储存食物获得的升级收益取决于食物能够回复的饥饿值，每达到300即升一级，最高10级。(例外的是肉馅饼和幻影鱼肉升2级，而全肉大饼升4级)</p>
    <p>诅咒号角无法获得充能，还会让你吃东西回复饥饿减少<text class="gg">1/3。</text></p>
    <p>号角的神器充能效果是<text class="gg">每回合获得0.25充能。</text></p>
</template>

<script>
export default {
    name: 'HornView',
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