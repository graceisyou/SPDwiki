<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice161.png" style="width: 100px;height: 100px;"/>
    <span class="title">闪避之戒</span>
  </div>
    
<p>这枚戒指会加快配戴者的反应速度，令其更难被敌人击中。被诅咒的戒指反而会让配戴者更容易被击中。</p>
<p>你的闪避属性变为<text class="gg">1.125^效果等级</text>倍。</p>
</template>

<script>
export default {
    name: 'RingEnergy',
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