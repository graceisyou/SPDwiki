<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice159.png" style="width: 100px;height: 100px;"/>
    <span class="title">神射之戒</span>
  </div>
    
<p>这枚戒指会加强配戴者的瞄准能力，使投掷武器变得更加致命且耐用。被诅咒的戒指则会起反作用。</p>
<p>每级增加投掷武器耐久度<text class="gg">20%</text>，且使投掷物威力上升<text class="gg">效果等级等同的等级。</text></p>

</template>

<script>
export default {
    name: 'RingShoot',
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