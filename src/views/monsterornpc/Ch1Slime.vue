<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/slime/part-Slice2.png" style="width: 100px;height: 100px;"/>
    <span class="title">史莱姆</span>
  </div>
    
<p>史莱姆是一种具有胶质外形与液态内核的奇特魔法生物。城市的下水道为它们提供了充分的水源和富足的养分。</p>
<p>史莱姆的外层胶膜具有极强的弹性，这使得任何单次攻击都难以对它们造成超过<text class="gg"></text>6点的伤害。</p>
<p>这个怪物的生命上限为<text class="gg">20</text>，攻击为<text class="gg">2~5</text>，防御为<text class="gg">0</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg"></text>1，闪避为<text class="gg">5</text>，命中为<text class="gg">12。</text></p>
<p>大幅抑制超过5的伤害。( 4之后每想要造成一点伤害，需要1,2，3，4，.点原始伤害)</p>
<p>掉落<text class="gg">4</text>经验，获取经验最大等级不超过<text class="gg">9。</text></p>
<p>20%掉落随机的<text class="gg">0级2阶武器</text>，每一次掉落都会降低掉落率2/3。</p>
</template>

<script>
export default {
    name: 'Ch1Slime',
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