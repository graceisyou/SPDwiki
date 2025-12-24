<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice236.png" style="width: 100px;height: 100px;"/>
    <span class="title">麻痹药剂</span>
  </div>    
<p>暴露于空气时，烧瓶里的液体会气化成一片令人失去知觉的黄色云雾。任何吸入气雾的生物都可能立即麻痹，直到云雾消散后一段时间才能行动。可以把该物件扔到远处的敌群中，让气体覆盖影响它们。</p>
<p>1000单位麻痹气体，对应<text class="gg">地缚根</text>种子。</p>
<p><text class="gg">大地护甲合剂</text>:增加<text class="gg">0~2+人物等级/3</text>的护甲每<text class="gg">50回合</text>上限-1。</p>
<p>地缚根效果:获得总量等于最大生命的植被护甲。植被护甲每次能吸收(层数+5)/2点伤害，并消耗等同于吸收伤害的护甲。</p>
<p>守望者特效:获得<text class="gg">人物等级+5</text>的树皮效果:每5回合衰减1点。</p>
</template>

<script>
export default {
    name: 'PotionParalyse',
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