<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice161.png" style="width: 100px;height: 100px;"/>
    <span class="title">武力之戒</span>
  </div>
    
<p>这枚戒指能够增强配戴者的打击力度。这份额外的力量在挥舞武器时相当有限，而徒手攻击则会被大幅增强。负等级的戒指会导致配戴者的攻击变得软弱无力。</p>
<p>武力戒指在空手时相当于一把等级等同于效果等级的武器，其阶数为:不超过18力量，<text class="gg">(力量-8)/2</text> 阶，超过18力量，<text class="gg">(力量-18)/4+5</text>阶。</p>
<p>武器基础伤害为 <text class="gg">阶数~5*阶数+5</text>，成长为<text class="gg">+1/+( 阶数+1)。</text></p>
<p>装备武器时每一效果等级增加1点近战伤害。</p>

</template>

<script>
export default {
    name: 'RingForce',
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