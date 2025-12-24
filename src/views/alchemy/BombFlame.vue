<template>
    <div class="titlebox">
    <el-image src="/images/alchemy/part-Slice57.png" style="width: 100px;height: 100px;"/>
    <span class="title">燃烧弾</span>
  </div>
    
    <p>这枚改造过的炸弹会在爆炸时释放出一片燃烧的火海。</p>
    <p>5*5火焰，10回合(在裂缝上只会持续2回合)</p>
</template>

<script>
export default {
    name: 'BombFlame',
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