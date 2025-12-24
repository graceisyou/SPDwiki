<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice160.png" style="width: 100px;height: 100px;"/>
    <span class="title">奥术之戒</span>
  </div>
    
<p>这枚戒指增强了武器上的附魔和护甲上的刻印，也包括诅咒!戒指会先提高它们的激活几率，当激活几率达到100%时会转而增加它们效果的强度。被诅咒的戒指则会反过来削弱附魔、刻印以及诅咒。</p>
<p>你的触发概率变为<text class="gg">1.175^效果等级</text>倍，触发率超过100%时将增强效果，例如:170%触发率时附魔刻印效果变为1.7倍。</p>
</template>

<script>
export default {
    name: 'RingArcana',
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