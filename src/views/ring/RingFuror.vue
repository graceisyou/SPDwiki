<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice153.png" style="width: 100px;height: 100px;"/>
    <span class="title">狂怒之戒</span>
  </div>
    
<p>这枚戒指会激发配戴者内心的怒火，使其能够更迅猛地攻击。被诅咒的戒指则会导致穿戴者攻击迟缓。</p>
<p>你的攻击速度变为<text class="gg">1.09051^效果等级</text>倍。</p>

</template>

<script>
export default {
    name: 'RingFuror',
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