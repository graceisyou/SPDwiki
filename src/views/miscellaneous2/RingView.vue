<template>
    <div class="titlebox">
    <el-image src="/images/miscellaneous/ring.gif" style="width: 100px;height: 100px;"/>
    <span class="title">戒指</span>
  </div>
    
<p>戒指效果以效果等级计算。</p>
<p>对于未诅咒的戒指，效果等级=实际等级+1;对于诅咒的戒指，效果等级=戒指等级-2,但不超过0。</p>
<p>除财富之戒外，当装备两个相同的戒指时，每个戒指独立计算效果等级，效果等级相加决定效果。</p>
<p>自然生成的戒指:2/3概率+0，4/15概率+1，1/15概率+2。小恶魔的戒指有额外的2级并一定诅咒。</p>
<p>自然生成的戒指有30%概率诅咒。鉴定戒指需要1级经验。</p>
</template>

<script>
export default {
    name: 'RingView',
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