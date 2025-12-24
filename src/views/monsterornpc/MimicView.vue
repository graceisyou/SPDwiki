<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/mimic/part-Slice3.png" style="width: 100px;height: 100px;"/>
    <span class="title">宝箱怪</span>
  </div>
    
<p>宝箱怪是一种能随意改变外形的生物。在地牢里它们几乎一直以宝箱形态出现，因为它们明白怎么去吸引冒险者。</p>
<p>这只怪物的生命值上限为(1+层数)*6，攻击为1+层数~2+2*层数，防御为0~1+层数/2，攻速为1，移速为1,闪避为2+层数/2，命中为6+层数。</p>
<p>开箱时的攻击必中，且伤害一定顶在最大值</p>
<p>具有<text class="gg">恶魔</text>属性。</p>
<p>经验值为0。</p>
<p>通常情况下，1/5的箱子会成为宝箱怪。特殊房间的宝箱怪生成概率有所上升。</p>
<p>除了原本应生成于该处的物品外，额外随机掉落金币/武器/投掷武器/护甲/戒指，概率均为1/5</p>
</template>

<script>
export default {
    name: 'MimicView',
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