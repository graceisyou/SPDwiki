<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice270.png" style="width: 100px;height: 100px;"/>
    <span class="title">魔药</span>
  </div>
    
<p>各魔药效果一览:</p>
<p><text class="gg">水爆魔药</text>:将距离小于2的地格变为水，距离等于2的地格有2/3概率变为水。清除变为水的地格处的火焰，击退相邻目标。中心击退方向与丢出方向相同。对落点的火属性生物造成<text class="gg">5+最深层数~10+最深层数*2</text>的伤害，周围八格只受到前者213伤害</p>
<p><text class="gg">淤泥魔药</text>:7*7范围内覆盖淤泥，对目标造成20回合淤泥。</p>
<p><text class="gg">冰暴魔药</text>:共生成1080单位的暴风雪，从中心向周围8格的空地扩散每格120容量的气体。在其中的目标每回合受两次冻结施加。</p>
<p><text class="gg">炼狱魔药</text>:共生成1080单位的气体火焰，从中心向周围8格的空地扩散每格120容量的气体。在其中的目标每回合都会起火。</p>
<p><text class="gg">雷鸣魔药</text>:20回合的的7*7电场。电场中的目标短暂麻痹，每2口合受到一次2+层数/5的电伤害，电场中法杖每回合回复1/3点充能。</p>
<p><text class="gg">紊乱魔药</text>:随机触发药剂效果，如果与常用使用方式不同，会有一次机会重新选取。药剂权重大部分都为2，除了治疗3(开了恐药则为0)力量0经验1</p>
</template>

<script>
export default {
    name: 'PotionBrews',
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