<template>
    <div class="titlebox">
    <el-image src="/images/weapons/part-Slice70.png" style="width: 100px;height: 100px;"/>
    <span class="title">战斗机制</span>
  </div>
    
<p>一次正常的物理攻击分为若干固定步骤。</p>
<p>1.给出攻击。攻击方给出攻击的具体信息，包括伤害，命中等。</p>
<p>2.命中检定。攻守双方进行命中与闪避的修正与计算，在0~最终命中与0~最终闪避的范围内拼点，攻方不失败则为命中。</p>
<p>3.预修正。攻守双方根据特殊状态进行伤害与防御的修正。</p>
<p>4.守方修正。防守方结算防御特效(如护甲刻印)，对伤害进行一次修正。</p>
<p>5.护甲减免。将伤害减去护甲值。</p>
<p>6.攻方修正。攻击方结算攻击特效(如武器特效)，再一次修正伤害。</p>
<p>7.承受伤害。防守方对计算完成的伤害进行最终修正，如抵抗、免疫。</p>
<p>8.最终结算。守方承受伤害，处理此次攻击的结果。</p>
<p>"法术攻击"跳过3~6步骤。</p>
</template>

<script>
export default {
    name: 'MechView',
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