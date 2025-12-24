<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice159.png" style="width: 100px;height: 100px;"/>
    <span class="title">韧性之戒</span>
  </div>
    
<p>这枚戒指使配戴者能够抵御本应致命的打击配戴者受伤越重，对伤害的抗性就越高。负等级的戒指则会让敌人更容易杀死配戴者</p>
<p>对所有伤害提供抗性，变为<text class="gg">0.85^(效果等级*失血比)</text>倍，向上取整。</p>
<p>注意韧性影响过的伤害最低为1点。</p>
</template>

<script>
export default {
    name: 'RingTenacity',
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