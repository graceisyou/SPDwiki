<template>
  <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice55.png" style="width: 100px;height: 100px;"/>
    <span class="title">炸弹</span>
  </div>
  
  <p>一颗颇庞大的黑火药炸弹。它炸起来周围全得遭殃。</p>
  <P>爆炸中心的伤害为<text class="gg">5+层数~10+2*层数</text>，其余范围伤害为<text class="gg">1~10+2*层数</text>。受护甲减免。</P>
  <p>强化炸弹配方见炼金指南。</p>
</template>

<script>
export default {
  name: 'BombView',
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