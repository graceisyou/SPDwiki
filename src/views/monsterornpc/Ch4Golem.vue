<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/golem/part-Slice1.png" style="width: 100px;height: 100px;"/>
    <span class="title">魔像</span>
  </div>
    
<p>魔像是矮人们试图利用魔法的新应用弥补机械设备长久以来的缺陷的产物。它们虽不似DM-300那样庞大笨重，但仍具有不可小觑的破坏力。</p>
<p>魔像因体型过大无法进入过道，但矮人们赋予了魔像魔力来弥补这一点-一魔像能在各个房间之间传送，并能将无法触及的敌人从远处拉回来。</p>
<p>这只怪物的生命值上限为<text class="gg">120</text>，攻击为<text class="gg">25~30</text>，防御为<text class="gg">0~12</text>，攻击延迟为<text class="gg">1</text>，移速为<text class="gg">1</text>，闪避为<text class="gg">15</text>，命中为<text class="gg">28。</text></p>
<p>具有<text class="gg">非生物、巨大体型</text>属性。</p>
<p>掉落<text class="gg">12</text>经验，获得经验的最大等级为<text class="gg">22</text>级:</p>
<p>1/8概率掉落随机武器或护甲(阶级分布同第五区)，每次掉落会使得掉落概率减少到一半。</p>
</template>

<script>
export default {
    name: 'Ch4Golem',
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