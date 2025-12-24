<template>
    <div class="titlebox">
    <el-image src="/images/ring/part-Slice153.png" style="width: 100px;height: 100px;"/>
    <span class="title">根骨之戒</span>
  </div>
    
<p>这枚戒指会增强配戴者的体质，使其拥有更强的力量与体格。负等级的戒指则会使人虚弱。</p>
<p>每级增加点<text class="gg">1</text>力量，生命值提升到103.5%。</p>

</template>

<script>
export default {
    name: 'RingMight',
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