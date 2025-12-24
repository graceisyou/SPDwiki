<template>
    <div class="titlebox">
    <el-image src="/images/monsterornpc/mimic/part-Slice16.png" style="width: 100px;height: 100px;"/>
    <span class="title">金色宝箱怪</span>
  </div>
    
<p>宝箱怪是一种能随意改变外形的魔法生物。在地牢里它们几乎一直以宝箱形态出现，因为这样总能吸引不防备的冒险者。</p>
<p>金色宝箱怪是试图吸引顶尖冒险者的强大宝箱怪。它们拥有更丰厚的财宝，但相对通常的宝箱怪也更为强大。</p>
<p>金色宝箱怪是普通宝箱怪的衍生生物，计算属性值时以1.33倍层数计算。</p>
<p>具有<text class="gg">恶魔</text>属性。</p>
<p>经验值为0。</p>
<p>1/10的金箱子会成为宝箱怪。</p>
<p>同普通宝箱怪，携带的装备或法杖不带有诅咒。如果物品不是投掷武器或神器且等级为0，有1/2概率升一级</p>
</template>

<script>
export default {
    name: 'MimicGolden',
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