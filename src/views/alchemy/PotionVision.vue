<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice236.png" style="width: 100px;height: 100px;"/>
    <span class="title">灵视药剂</span>
  </div>
<p>喝下这个，你的心智将与大范围内的生物精神同调，让你能感受到围墙背后的生体所在。该药剂还能够让你的视野无视身边门墙的阻挡。</p>
<p>20回合灵视，对应<text class="gg">消逝草</text>种子。</p>
<p><text class="gg">魔能透视合剂</text>:完全透视，范围12，50回合</p>
<p>消逝草效果:将目标随机传送。</p>
<p>守望者特效:<text class="gg">回到上一层。</text></p>
</template>

<script>
export default {
    name: 'PotionVision',
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