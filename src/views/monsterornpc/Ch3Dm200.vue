<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/dm200/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">DM-200</span>
  </div>
    
<p>DM-200是矮人研发的第二代城防器械，最初用来保护矿洞中的矮人矿工与下方的城市。比起第一代它们相当庞大笨重，并利用强力的液压锤碾压入侵者。</p>
<p>臃肿的体型是它们的一大缺陷-一它们无法进入狭窄的门与过道。为了弥补灵活性的缺陷，矮人设计了另一种功能:DM-200能向远处的或是它们无法触及的敌人喷射有毒的废</p>
<p>这只怪物的生命值上限为<text class="gg">80</text>，攻击为<text class="gg">10~25</text>，防御为<text class="gg">0~8</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">12</text>，命中为<text class="gg">20。</text></p>
<p>遇到敌人会远程发射毒气，弹道上也会留下少量毒气。</p>
<p>具有<text class="gg">非生物、巨大体型</text>属性。</p>
<p>掉落<text class="gg">9</text>经验，获得经验的最大等级为<text class="gg">17</text>级1/8概率掉落随机武器或护甲(阶级分布同矮人区)，每次掉落会使得掉落概率减少到一半。</p>
</template>

<script>
export default {
    name: 'Ch3Dm200',
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